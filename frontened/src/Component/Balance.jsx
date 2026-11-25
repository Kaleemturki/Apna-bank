import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Balance() {
    const [acno, setAcno] = useState();
    const [pin, setPin] = useState();
    const [msg, setMsg] = useState();

    const navigate = useNavigate();


    var bal = async () => {
        if (!acno || !pin) {
            setMsg("Please Fill Details.")
            return;
        }

        const dt = {
            acno: acno,
            pin: pin
        };
        try {
            setMsg("");
            var res = await axios.post("http://localhost:5000/balance", dt);

            if (res.data && res.data.message) {
                setMsg(res.data.message)
            }
            else {
                setMsg("Success")
            }

        }
        catch (error) {
            if (error.response?.status === 401 || error.response?.status === 403) {
                navigate("/login");
                return;
            }
            else {
                setMsg(
                    error.response?.data?.message ||
                    "Something went wrong. Please try again."
                );
            }
        }

    }

    return (
        <div>

            <div className="row">
                <div className="col-md-4 col-2"></div>
                <div className="col-md-4 col-10 shadow-lg" style={{ "borderRadius": "30px", "padding": "20px", "fontFamily": "sans-serif", "marginTop": "80px", "marginBottom": "50px" }}>
                    <center><hr /><h4 style={{ fontWeight: "bold" }}>Account Balance.</h4></center><hr />

                    <div className="alert alert-success" role="alert">
                        <h3>{msg}</h3>

                    </div>

                    Enter Account Number:
                    <input type="text" className="form-control" onInput={(e) => setAcno(e.target.value)} />
                    Enter Pin:
                    <input type="text" className="form-control" onInput={(e) => setPin(e.target.value)} /><br />

                    <button className="btn" style={{ background: "rgb(200,0,0)", color: "whitesmoke" }} onClick={() => bal()}>
                        Submit
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Balance;