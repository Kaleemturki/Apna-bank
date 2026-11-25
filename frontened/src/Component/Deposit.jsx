import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Deposit() {
  const [acno, setAcno] = useState("");
  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState("");
  const [sms, setSms] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const [loading, setLoading] = useState(false);

      const navigate = useNavigate();


  const depst = async (e) => {
    e.preventDefault(); // Prevents page reload on submit

    

    if (!acno || !pin || !amount) {
      setSms(" Please fill in all fields.");
      setIsSuccess(false);
      return;
    }

    const pay = {
      acno: acno,
      pin: pin,
      amount: amount,
    };

    try {
      setSms("");
      setLoading(true);

      const res = await axios.post("http://localhost:5000/deposit", pay);

      setIsSuccess(true);
      if (res.data && res.data.message) {
        setSms(` ${res.data.message}`);
      } else {
        setSms(" Deposited Successfully");
      }

      setAcno("");
      setPin("");
      setAmount("");
    } catch (error) {
       if (error.response?.status === 401 ||
                error.response?.status === 403) {

                navigate("/login");
                return;
            }

      setIsSuccess(false);
      if (error.response && error.response.data && error.response.data.message) {
        setSms(` ${error.response.data.message}`);
      } else {
        setSms(" Something went wrong. Please Try Again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center p-3">
      <div className="card shadow-lg border-0 rounded-4 w-100" style={{ maxWidth: "450px" }}>
        <div className="card-body p-4 p-sm-5">
          
          {/* Header Section */}
          <div className="text-center mb-4">
            <div className="bg-success-subtle rounded-circle d-inline-flex align-items-center justify-content-center p-3 mb-2" style={{ width: "60px", height: "60px" }}>
              <span className="fs-3"></span>
            </div>
            <h2 className="fw-bold text-dark m-0">Deposit Funds</h2>
            <p className="text-muted small mt-1">Add money securely into your account</p>
            <hr className="text-muted opacity-25 my-3" />
          </div>

          {/* Dynamic Alert Banner */}
          {sms && (
            <div 
              className={`alert ${isSuccess ? "alert-success border-success-subtle" : "alert-danger border-danger-subtle"} text-center fw-medium mb-4 py-2 small rounded-3`} 
              role="alert"
            >
              {sms}
            </div>
          )}

          {/* Form Fields */}
          <form onSubmit={depst}>
            <div className="mb-3">
              <label className="form-label small fw-bold text-secondary text-uppercase tracking-wider">Account Number</label>
              <input 
                type="text" 
                className="form-control form-control-lg rounded-3 fs-6" 
                placeholder="Enter your account number"
                value={acno}
                onChange={(e) => setAcno(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label small fw-bold text-secondary text-uppercase tracking-wider">PIN Number</label>
              <input 
                type="password"  // Securely masks the user's PIN
                maxLength="6"
                className="form-control form-control-lg rounded-3 fs-6" 
                placeholder="Enter your 4 or 6 digit PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label small fw-bold text-secondary text-uppercase tracking-wider">Deposit Amount</label>
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0 text-secondary fw-semibold">₹</span>
                <input 
                  type="number" // Enforces numeric input for amounts
                  min="1"
                  className="form-control form-control-lg border-start-0 rounded-end-3 fs-6" 
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            {/* Action Button */}
            <button 
              type="submit" 
              className="btn btn-success btn-lg w-100 fw-bold rounded-3 fs-6 shadow-sm py-2" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Processing...
                </>
              ) : (
                "Confirm Deposit"
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Deposit;
