import React, { useState } from "react";
import axios from "axios";

function Pin() {
  const [acno, setAcno] = useState("");
  const [pin, setPin] = useState("");
  const [np, setNp] = useState("");
  const [sms, setSms] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const [loading, setLoading] = useState(false);

  const pinch = async (e) => {
    e.preventDefault();
    if (!acno || !pin || !np) {
      setSms(" Please fill in all fields.");
      setIsSuccess(false);
      return;
    }

    const pwnData = {
      acno: acno,
      pin: pin,
      pwn: np, 
    };

    try {
      setSms("");
      setLoading(true);

      const res = await axios.post("http://localhost:5000/pinchange", pwnData);

      setIsSuccess(true);
      if (res.data && res.data.message) {
        setSms(` ${res.data.message}`);
      } else {
        setSms(" Pin changed successfully.");
      }
    } catch (error) {
      setIsSuccess(false);
      if (error.response && error.response.data && error.response.data.message) {
        setSms(` ${error.response.data.message}`);
      } else {
        setSms(" Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center p-3">
      <div className="card shadow-lg border-0 rounded-4 w-100" style={{ maxWidth: "450px" }}>
        <div className="card-body p-4 p-sm-5">
          
          <div className="text-center mb-4">
            <div className="bg-success-subtle rounded-circle d-inline-flex align-items-center justify-content-center p-3 mb-2" style={{ width: "60px", height: "60px" }}>
              <span className="fs-3"></span>
            </div>
            <h2 className="fw-bold text-dark m-0">Secure PIN Change</h2>
            <p className="text-muted small mt-1">Update your account PIN quickly and safely</p>
            <hr className="text-muted opacity-25 my-3" />
          </div>

          {sms && (
            <div 
              className={`alert ${isSuccess ? "alert-success border-success-subtle" : "alert-danger border-danger-subtle"} text-center fw-medium mb-4 py-2 small rounded-3`} 
              role="alert"
            >
              {sms}
            </div>
          )}

          {/* Form */}
          <form onSubmit={pinch}>
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
              <label className="form-label small fw-bold text-secondary text-uppercase tracking-wider">Current PIN</label>
              <input 
                type="password"  
                maxLength="6"
                className="form-control form-control-lg rounded-3 fs-6" 
                placeholder="Enter old PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label small fw-bold text-secondary text-uppercase tracking-wider">New Secure PIN</label>
              <input 
                type="password" 
                maxLength="6"
                className="form-control form-control-lg rounded-3 fs-6" 
                placeholder="Enter new PIN"
                value={np}
                onChange={(e) => setNp(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-success btn-lg w-100 fw-bold rounded-3 fs-6 shadow-sm py-2" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Updating...
                </>
              ) : (
                "Confirm & Update PIN"
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Pin;
