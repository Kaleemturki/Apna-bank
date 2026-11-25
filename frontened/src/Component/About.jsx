import React from "react";

function About(){

    return(
         <div>
            <div className="row">
                <div className="col-md-3 col-1"></div>
                <div className="col-md-6 col-10 shadow-lg" style={{ "padding": "20px", "borderRadius": "20px", "textAlign": "center", "fontFamily": "sans-serif", "marginTop": "100px", "marginBottom":"50px"}}>
                    <br />
                    <hr /><h4 style={{ "fontWeight": "bold" }}><img src="Abg.png" style={{ "borderRadius": "50%", height: "50px", width: "50px" }} /> About our Banking System</h4><hr />
                    <br />
                    <p>Online Banking connects a customer's account to a secure, oftrn mobile responsive, web-based system, allowing for digital, real time banking oprations.
                        <br /><br /><br /><br />
                        <h6><b>Benefits of Online Banking System</b></h6><hr />
                        <b>▪️ 24/7 Convenience:</b> Access Banking Service anytime, anywhere.<br />
                        <b>▪️ Secure Access:</b> Multi-layered security, including SSL certificates, encryption and OTP (One Time Password) for Transactions.<br />
                        <b>▪️ Interactive UI/UX:</b> Smooth Animations and clear "Login" or "Register" call to actions.<br />
                        <br/>
                    </p>
                </div>
                <div className="row">
                <div className="col" style={{ "padding": "20px", "color": "whitesmoke", "backgroundColor": "rgb(200,0,0", "textAlign": "center", "fontFamily": "-apple-system", "position": "absolute" }}>
                    <p>Secure, fast and reliable banking at your fingertips -- manage your finances anytime with ease and confidence on our trusted digital platform.<br />For assistance, contact |📧:support@apnabank.com ||📞:+91 85962 35245.<br />©️2026 ApnaBank.<br />All Rights Reserved.</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default About;