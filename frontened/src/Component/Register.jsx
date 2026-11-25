import react, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {

    const [name, setName] = useState()
    const [pass, setPass] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [sms, SetSms] = useState()


    var nav = useNavigate()

    var regis = async () => {



        const dt = { "n": name, "p": pass, "e": email, "ph": phone };

        console.log(dt)
        const res = await axios.post("http://localhost:5000/register", dt);

        if (res.data.status) {
            alert("Account Opened Successfully" + name)


            nav("/login")
        }

        else {
            alert("Registration Successful!");
            nav("/login");
        }


    };


    return (
        <div>

            <div className="row">
                <div className="col-md-4 col-2"></div>

                <div className="col-md-4 shadow-lg" style={{ "borderRadius": "30px", "padding": "20px", "fontFamily": "sans-serif", "marginTop": "80px", "marginBottom": "50px" }}>
                    <center><hr /><h4 style={{ "fontWeight": "bold" }}> Register Your Account</h4></center><hr />
                    <br />                
                    <div className="alert alert-success" role="alert">
                        <h3>{sms}</h3>
                    </div>

                    Enter Name:
                    <input type="text" className="form-control" onInput={(e) => setName(e.target.value)} /><br />
                    Enter Password:
                    <input type="text" className="form-control" onInput={(e) => setPass(e.target.value)} /><br />
                    Enter Email:
                    <input type="text" className="form-control" onInput={(e) => setEmail(e.target.value)} /><br />
                    Enter Phone:
                    <input type="text" className="form-control" onInput={(e) => setPhone(e.target.value)} /><br />
                    <button className="btn btn-success" onClick={() => regis()}>Register.</button>

                </div>
            </div>
        </div>
    )
}
export default Register;