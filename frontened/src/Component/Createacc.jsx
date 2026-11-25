import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
    const [name, setName] = useState("");
    const [pin, setPin] = useState("");
    const [email, setEmail] = useState("");
    const [fname, setfname] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [amount, setAmount] = useState("");
    const [sms, setSms] = useState("");


    const nav=useNavigate();


    var cAccount = async () => {

        if(!name || !pin || !fname){
            setSms("Please Fill Details");
            return;
        }

        var resData = await axios.get("http://localhost:5000/getall");
        var x = resData.data.length;
        var ac = "SBI";

        // 2.   logic that we have checked the SBI count number before entering another one 
        if (x > 0) {
            x = x + 101;
            ac = ac + x;
        } else {
            ac = "SBI101";
        }

        var dt = {
            "acno": ac,
            "name": name,
            "pin": pin,
            "fname": fname,
            "phone": phone,
            "email": email,
            "gender": gender,
            "city": city,
            "state": state,
            "country": country,
            "amount": amount

        }
        console.log("serviring", dt)
        var res = await axios.post("http://localhost:5000/create", dt)
        setSms("Account Opened with acount = " + ac)
            nav("/login");


        alert("Account Opened Successfully")


    }


    return (
        <div>
            <div className="row">
                <div className="col-md-3 col-2"></div>
                <div className="col-md-6 col-10 shadow-lg " style={{ "borderRadius": "30px", "padding": "20px", "fontFamily": "sans-serif", "marginTop": "80px", "marginBottom": "50px" }} >
                     <center><hr /><h4 style={{ "fontWeight": "bold" }}> Create Your Account</h4></center><hr />
                    

                    <div class="alert alert-success" role="alert">
                        <h3>{sms}</h3>

                    </div>

                    Enter Name:
                    <input type="text" className="form-control" onInput={(e) => setName(e.target.value)} />

                    <div className="row">
                        <div className="col">
                            Enter Pin:
                            <input type="text" className="form-control" onInput={(e) => setPin(e.target.value)} />
                        </div>
                        <div className="col">
                            Enter Email:
                            <input type="text" className="form-control" onInput={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Enter Fname:
                            <input type="text" className="form-control" onInput={(e) => setfname(e.target.value)} />
                        </div>
                        <div className="col">
                            Enter phone:
                            <input type="text" className="form-control" onInput={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="col">
                            Enter Gender:
                            <input type="text" className="form-control" onInput={(e) => setGender(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Enter City:
                            <input type="text" className="form-control" onInput={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="col">
                            Enter State:
                            <input type="text" className="form-control" onInput={(e) => setState(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Enter Country:
                            <input type="text" className="form-control" onInput={(e) => setCountry(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Enter Amount:
                            <input type="text" className="form-control" onInput={(e) => setAmount(e.target.value)} />
                        </div>
                    </div><br />

                    <button className="btn btn-success" onClick={() => cAccount()} >Create Account</button>
                </div>
            </div>
        </div>

    )
}
export default Create;