import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Accountsum() {

    const [email, setEmail] = useState();
    const [pin, setPin] = useState();
    const [accountData,setAccountData]=useState(null);
    const [msg, setMsg] = useState();

    const navigate = useNavigate();



    const Account = async () => {

        if (!email || !pin) {
            setMsg("Please Fill Details");
            return;
        }

        const dt = {
            "email": email,
            "pin": pin
        };

        try {
            setMsg("");
            setAccountData(null);

            const res = await axios.post("http://localhost:5000/accountsum", dt,
                    { withCredentials: true }

            );

            if (res.data && res.data.account) {
                setAccountData(res.data.account)
                setMsg("Account Summary Recieved")
            }
            else {
                setMsg(res.data.message ||"Account details not found.")
            }
        }
        catch (error) {
             if (error.response?.status === 401 ||
                error.response?.status === 403) {

                navigate("/login");
                return;
            }

            if (error.response && error.response.data && error.response.data.message) {
                setMsg(error.response.data.message)

            }
            else {
                setMsg("Something Went Wrong.Plz try Again.")

            }
        }

    }
    return (
        <div>
            <div className="row">
                <div className="col-md-1 col-1"></div>
                <div className="col-md-4 col-1 shadow-lg" style={{ "borderRadius": "10px", "padding": "20px", "marginTop": "80px", "fontFamily": "sans-serif", "marginBottom": "50px" }}>
                    <center><hr /><h4 style={{ fontWeight: "bold" }}>Account Summary.</h4></center><hr />

                    <div className="alert alert-success" role="alert">
                        <h3>{msg}</h3>
                    </div>

                    Enter Email:
                    <input type="text" className="form-control" onInput={(e) => setEmail(e.target.value)} /><br />
                    Enter Pin:
                    <input type="text" className="form-control" onInput={(e) => setPin(e.target.value)} /><br />
                    <button className="btn" style={{ background: "rgb(15, 150, 42)", color: "whitesmoke" }} onClick={() => Account()}> Submit

                    </button>
                </div>
                <div className="col-md-1 col-1"></div>
                <div className="col-md-5 col-1 shadow-lg" style={{"borderRadius":"30px","padding":"20px","marginTop":"80px","fontFamily":"sans=serif","marginBottom":"50px"}}>
                    
<table className="table table-hover table-success table-striped table-bordered">
    <thead>
        <tr>
            <th>Name</th>
            <th>City</th>
            <th>FatherName</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Amount</th>
        </tr>
    </thead>

    <tbody>
        {accountData ? (
            <tr>
                <td>{accountData.name}</td>
                <td>{accountData.city}</td>
                <td>{accountData.fname}</td>
                <td>{accountData.phone}</td>
                <td>{accountData.email}</td>
                <td>₹{accountData.amount}</td>
            </tr>
        ) : (
            <tr>
                <td colSpan="6" className="text-center">
                    Enter your details and click Submit
                </td>
            </tr>
        )}
    </tbody>
</table>



                </div>
            </div>


        </div>
    )
}
export default Accountsum;