import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

function Fund() {
    const [acno, setAcno] = useState("");
    const [tacno, setTacno] = useState("");
    const [pin, setPin] = useState("");
    const [amt, setAmt] = useState("");

    const navigate=useNavigate();
    
    // Status states for clean feedback
    const [msg, setMsg] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const getTrans = async () => {
        if (!acno || !tacno || !pin || !amt) {
            setMsg("All fields are required!");
            setIsSuccess(false);
            return;
        }

        const fnd = { acno, tacno, pin, amt };

        try {
            setMsg("");
            setLoading(true);
            
            const res = await axios.post("http://localhost:5000/fundt", fnd);
            
            if (res.data && res.data.message) {
                setMsg(res.data.message);
            } else {
                setMsg("Fund Transferred Successfully!");
            }
            setIsSuccess(true);
            
            setTacno("");
            setAmt("");
            setPin("");

        } catch (error) {
             if (error.response?.status === 401 ||
                error.response?.status === 403) {

                navigate("/login");
                return;
            }


            setIsSuccess(false);
            if (error.response && error.response.data && error.response.data.message) {
                setMsg(error.response.data.message);
            } else {
                setMsg("Something went wrong. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    
                    <div className="card shadow border-0 rounded-4">
                        
                        <div className="card-header bg-primary text-white text-center py-4 rounded-top-4">
                            <h2 className="mb-0 fw-bold fs-4"> Secure Fund Transfer</h2>
                            <small className="text-white-50">Transfer money instantly to any account</small>
                        </div>

                        <div className="card-body p-4">
                            
                            {msg && (
                                <div className={`alert ${isSuccess ? "alert-success" : "alert-danger"} d-flex align-items-center rounded-3 mb-4`} role="alert">
                                    <div className="fw-medium">{msg}</div>
                                </div>
                            )}

                            <div className="mb-3">
                                <label className="form-label fw-semibold text-secondary small">YOUR ACCOUNT NUMBER</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter your account number"
                                    className="form-control form-control-lg rounded-3 fs-6" 
                                    value={acno}
                                    onChange={(e) => setAcno(e.target.value)} 
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold text-secondary small">SECURITY PIN</label>
                                <input 
                                    type="password" 
                                    placeholder="••••"
                                    maxLength="4"
                                    className="form-control form-control-lg rounded-3 fs-6" 
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)} 
                                />
                            </div>

                            <hr className="my-4 text-muted opacity-25" />

                            <div className="mb-3">
                                <label className="form-label fw-semibold text-secondary small">RECIPIENT ACCOUNT NUMBER</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter beneficiary account number"
                                    className="form-control form-control-lg rounded-3 fs-6" 
                                    value={tacno}
                                    onChange={(e) => setTacno(e.target.value)} 
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label fw-semibold text-secondary small">TRANSFER AMOUNT (₹)</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-light border-end-0 fw-bold text-secondary">₹</span>
                                    <input 
                                        type="number" 
                                        placeholder="0.00"
                                        className="form-control form-control-lg rounded-end-3 fs-5 fw-bold text-success border-start-0" 
                                        value={amt}
                                        onChange={(e) => setAmt(e.target.value)} 
                                    />
                                </div>
                            </div>

                            <button 
                                className="btn btn-primary btn-lg w-100 py-2.5 rounded-3 fw-bold shadow-sm transition" 
                                onClick={getTrans}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span>Processing...</span>
                                ) : (
                                    <span>Initiate Transfer</span>
                                )}
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Fund;




/*
import react, { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

function Fund() {
    const [acno, setAcno] = useState()
    const [tacno, setTacno] = useState()
    const [pin, setPin] = useState()
    const [amt, setAmt] = useState()
    const [msg, setMsg] = useState()

    var getTrans = async () => {

        const fnd=({
            acno:acno,
            tacno:tacno,
            pin:pin,
            amt:amt,

        })

        try{

            setMsg("");
            
            var res=await axios.post("http://localhost:5000/fundt",fnd);
            console.log(res)

            if(res.data && res.data.message){
                setMsg(res.data.message)
            }
            else{
                setMsg("Fund Transfer Successfully")
            }
        }
        catch(error){
            if(res.response && res.response.data && res.response.data.message){
                setMsg(error.response.data.message);
            }
            else{
                setMsg("Something Went Wrong. Pls try gain")
            }
        }

       
    }



    return (
        <div>

            <center><h1>Welcome To FundTransfer Page..</h1></center>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="alert alert-success" role="alert">
                        <h3>{msg}</h3>
                    </div><br />

                    Enter Account Number:
                    <input type="text" className="form-control" onInput={(e) => setAcno(e.target.value)} /><br />
                    Enter Pin Number:
                    <input type="text" className="form-control" onInput={(e) => setPin(e.target.value)} /><br />
                    Enter Amount To Transfer:
                    <input type="text" className="form-control" onInput={(e) => setAmt(e.target.value)} /><br />
                    Enter Account To Transfer:
                    <input type="text" className="form-control" onInput={(e) => setTacno(e.target.value)} /><br />
                    <button className="btn btn-success" onClick={() => getTrans()}>Transfer</button>


                </div>
            </div>

        </div>
    )
}

export default Fund;

*/






