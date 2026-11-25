const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const register = require('./register');
const userregis = require('./register');

const session = require('express-session');
const account = require('./account');
var app = express()

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json());

app.use(session({
    secret: "abcdkkkk",
    saveUninitialized: true,
    resave: true,

    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    }
}));


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mongobank")
        const AccountInfo = await account.find(); //work now


        console.log("Mongodb connected");
    }
    catch (error) {
        console.error("connection failed", error.message);
    }
};
connectDB();

// Add this route to fix the 404 or to check data whether it has 1 or 0 Ac SBi  then react take axios put localhost500
app.get("/getall", async (req, res) => {
    try {
        const data = await account.find();
        res.json(data);
        console.log(data)
    } catch (error) {
        res.status(500).send("Error fetching data");
    }
});



app.post("/create", async (req, res) => {
    try {
        var acno = req.body.acno;
        var name = req.body.name;
        var pin = req.body.pin;
        var fname = req.body.fname;
        var phone = req.body.phone;
        var email = req.body.email;
        var gender = req.body.gender;
        var city = req.body.city;
        var state = req.body.state;
        var country = req.body.country;
        var amount = req.body.amount;

        var dt = { acno: acno, name: name, pin: pin, fname: fname, phone: phone, email: email, gender: gender, city: city, state: state, country: country, amount: amount }

        const result = await account.create(dt);

        console.log("Acount created");
        res.status(200).send("sucessfull done");
    }
    catch (error) {
        console.error("Error creating account:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/deposit", async function (req, res) {

    try {

        if (!req.session.userId) {
            return res.status(401).json({ message: "Unauthorized. Please log in first." });
        }

        var { acno, pin, amount } = req.body;
        console.log("Account:", acno, "Pin:", pin, "Amount:", amount);

        const depositAmount = Number(amount);
        if (isNaN(depositAmount) || depositAmount <= 0) {
            return res.status(400).json({ message: "Invalid deposit amount" });
        }

        const Account = await account.findOne({ acno: acno, pin: pin });

        if (!Account) {
            return res.status(402).json({ message: "Invalid Account Number or PIN" });
        }

        const currentBalance = Number(Account.amount) || 0;

        // Save total back as a string to match your database data type
        Account.amount = String(currentBalance + depositAmount);
        await Account.save();

        // FIXED: Changed Account.balance to Account.amount to match schema
        return res.status(200).json({
            message: `Successfully deposited ₹${depositAmount}. New Balance: ₹${Account.amount}`
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error during deposit" });
    }
});

app.post("/balance", async function (req, res) {
    try {
        if (!req.session || !req.session.userId) {
            return res.status(403).json({ message: "Unauthorized. Please log in first" })
        }

        var { acno, pin } = req.body;


        const Account = await account.findOne({ acno: acno, pin: pin })

        if (!Account) {
            return res.status(401).json({ message: "Invalid Account or Pin" })
        }
        var currentBalance = Number(Account.amount) || 0;

        return res.status(200).json({
            message: `Your Current Balance : Rs.${currentBalance}`
        });

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Server Error During Error"
        })
    }

}
)

app.post("/withdrw", async function (req, res) {

    try {
        if (!req.session || !req.session.userId) {
            return res.status(403).json({ message: "Unauthorized. Please log in first." });
        }


        var { acno, pin, amount } = req.body;
        console.log("Account:", acno, "Pin:", pin, "Amount:", amount);

        var withdrawAmount = Number(amount)

        if (isNaN(withdrawAmount || withdrawAmount <= 0)) {
            return res.status(400).json({ message: "Invalid Amount " });
        }


        const Account = await account.findOne({ acno: acno, pin: pin });

        if (!Account) {
            return res.status(401).json({ message: "Invalid Account or pin " })
        }

        var currentBalance = Number(Account.amount) || 0;

        Account.amount = String(currentBalance - withdrawAmount);
        await Account.save();

        return res.status(200).json({
            message: `Successfilly WithDraw ${withdrawAmount}. New balance is ${Account.amount}`
        });

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Server Error During Error"
        })
    }


}
);

app.post("/accountsum", async function (req, res) {

    try {
        if (!req.session || !req.session.userId) {
            return res.status(401).json({ message: "Unauthorized. Plz login First" });
        }

        const { email, pin } = req.body;

        console.log("email:", email, "pin:", pin)

        const Account = await account.findOne({ email: email, pin: pin });
        if (!Account) {
            return res.status(401).json({
                message: "Invalid Account or Password"
            })
        }

        return res.status(200).json({
            message: "Account details fetch Successfully",
            account: {
                name: Account.name,
                amount: Account.amount,
                city: Account.city,
                fname: Account.fname,
                phone: Account.phone,
                email: Account.email
            }

        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "server Error"
        });

    }


})

app.post("/pinchange", async function (req, res) {
    try {

        if (!req.session || !req.session.userId) {
            return res.status(401).json({ message: "Unauthorized. Please log in first." });
        }
        const { acno, pwn, pin } = req.body;
        console.log("Account:", acno, "Pin:", pin, "NEWPIN:", pwn);

        var pnn = Number(pwn)

        if (isNaN(pwn || pwn < 0)) {
            return res.status(400).json({
                message: "Pls Enter Valid Pin"
            })
        }
        const Account = await account.findOne({ acno: acno, pin: pin });
        if (!Account) {
            return res.status(401).json({
                message: "Invalid Pin Or Account Number"
            })
        }
        Account.pin = pnn;
        await Account.save();

        return res.status(200).json({
            message: `Pin Changed Successfully . Your Old Pin Were ${pin}`
        });

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Server Error.During Running"
        })

    }
}
);


app.post("/register", async function (req, res) {

    var name = req.body.n
    var pass = req.body.p
    var email = req.body.e
    var phone = req.body.p


    var dt = { name: name, pass: pass, email: email, phone: phone }

    console.log(dt)

    await userregis.create(dt);

    res.status(200).send("User Registered Successfully");

})


app.post("/fundt", async function (req, res) {

    try {
        const { acno, tacno, pin, amt } = req.body;

        var Amt = Number(amt);

        if (isNaN(Amt || Amt < 0)) {
            return status(400).json({
                message: "Please Enter valid Amount.!"
            })
        }

        const Account = await account.findOne({ acno: acno, pin: pin });
        if (!Account) {
            return res.status(401).json({
                message: "Account or pin Were Invalid.!"
            })
        }
        const Account2 = await account.findOne({ acno: tacno });
        if (!Account2) {
            return res.status(403).json({
                message: "Reciever Account Were Invalid"
            })
        }
        const currentBalance = Number(Account.amount)
        Account.amount = String(currentBalance - Amt)
        await Account.save();

        const currentamt2 = Number(Account2.amount)
        Account2.amount = String(currentamt2 + Amt)
        await Account2.save();

        return res.status(200).json({
            message: "Successfully Transfer Ther Amount"
        })
    }

    catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Server Error During Running ."
        })
    }

}
)

app.post("/login", async function (req, res) {
    try {

        const { name, pass } = req.body;

        var user = await userregis.findOne({ name: name, pass: pass });

        if (user) {
            console.log("Successfully logged in: " + name);

            req.session.userId = user._id;
            req.session.username = user.name
            console.log(user._id)

            req.session.save(function (err) {
                if (err) {
                    console.error("Session save error:", err);
                    return res.status(500).json({ message: "Session storage failed" });
                }

                console.log("Session is securely saved as = " + req.session.loguser);
                return res.json({ message: "Login Successful", success: true, username: user.name });
                
            });



        } else {

            res.status(401).json({ message: "Invalid credentials", success: false });
        }
    } catch (err) {
        console.log("Error in login: " + err);
        res.status(500).json({ message: "Server error" });
    }
});


//for the session 

app.get('/checksession', (req, res) => {
    if (req.session.userId) {
        res.json({
            st: true,
            uname: req.session.username
        });
    } else {
        res.json({
            st: false,
            uname: ""
        });
    }
});

app.get("/lout",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.status(500).json({
                message:"Logout Failed"
            });
        }
        res.clearCookie(".connect.sid");

        res.json({
            message:"Logout Successfull"
        })
    })
})




app.get("/", (req, res) => {
    res.send("Server is running...");
});


app.listen(5000)



