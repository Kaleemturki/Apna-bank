import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Withdraw() {
    const [acno, setAcno] = useState()
    const [pin, setPin] = useState()
    const [amount, setAmount] = useState()
    const [sms, setSms] = useState("");

    const navigate = useNavigate();


    var withd = async () => {

        if (!acno || !pin || !amount) {
            setSms("Please Fill Details");
            return;
        }

        const way = {
            acno: acno,
            pin: pin,
            amount: amount,

        };

        try {

            setSms("");

            var res = await axios.post("http://localhost:5000/withdrw", way);
            console.log(res)

            if (res.data && res.data.message) {
                setSms(res.data.message)
            }
            else {
                setSms("WithDraw Successful")
            }
        }
        catch (error) {
            if (error.response?.status === 401 ||
                error.response?.status === 403) {

                navigate("/login");
                return;
            }


            if (error.response && error.response.data && error.response.data.message) {
                setSms(error.response.data.message);
            }

            else {
                setSms("Something went Wrong. Plz try Again")
            }
        }



    }

    return (
        <div>
            <div className="row">

                <div className="col-md-4 col-1"></div>
                <div className="col-md-4 col-10 shadow-lg " style={{ "borderRadius": "30px", "padding": "20px", "fontFamily": "sans-serif", "marginTop": "80px", "marginBottom": "50px" }}>
                    <center><hr /><h4 style={{ fontWeight: "bold" }}> Withdraw Amount</h4></center><hr />
                    <br />
                    <div class="alert alert-success" role="alert">
                        <h3>{sms}</h3>
                    </div>

                    Enter Account Number:
                    <input type="text" className="form-control" onInput={(e) => setAcno(e.target.value)} /><br />
                    Enter Pin Number:
                    <input type="text" className="form-control" onInput={(e) => setPin(e.target.value)} />
                    Enter Amount o Withdraw:
                    <input type="text" className="form-control" onInput={(e) => setAmount(e.target.value)} /><br />

                    <button className="btn" style={{ background: "rgb(200,0,0)", color: "whitesmoke" }} onClick={() => withd()}>
                        Withdraw
                    </button>

                </div>

            </div>
        </div>
    )
}
export default Withdraw;

