import React from "react";
function Contact(){
    return(
         <div>
            <div className="row">
                <div className="col-md-3 col-1"></div>
                <div className="col-md-6 col-10 shadow-lg" style={{ "padding": "25px", "borderRadius": "25px", "textAlign": "center", "fontFamily": "sans-serif", "marginTop": "80px", "marginBottom":"50px"}}>
                    <br/>
                    <center><hr/><h4 style={{"fontWeight":"bold"}}><img src="Abg.png" style={{ "borderRadius": "50%", height: "50px", width: "50px" }} /> 📞Contact us:</h4><hr/></center>
                    <br/>
                    <p>We're here to assist you with all your banking needs. If you have any questions, concerns or need support, 
                        feel free to reach out to us anytime. Our dedicated support team ensure secure, reliable and quick assistant for all your queries.
                        <br/><br/><b>📍Address:</b> 124 Banking Street, Dehradun, Uttrakhand, India<br/>
                        <br/><b>📧Email:</b> support@apnabank.com<br/>
                        <br/><b>📞Phone:</b> +91 85962 35245<br/>
                        <br/><b>Working Hours :</b><br/>
                        Monday-Friday : 9:00 AM - 6:00 PM<br/> 
                        Saturday : 10:00 AM - 2:00 PM<br/> 
                        Sunday : Closed<br/>
                        <br/>
                        You can also fill out the contact form below and we will get back to you as soon as possible. Your trust and security are our top priorities.<br/> 
                        <br/><br/>
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
export default Contact;