import react, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function Login() {

    const [name, setName] = useState()
    const [pass, setPass] = useState()
    const [sms, setSms] = useState()
    


    const nav = useNavigate();


    var login = async () => {


        if (!name || !pass) {
            setSms('Please Fill Details');
            return;
        }

        const lgn = ({
            name: name,
            pass: pass

        });

        try {

            setSms("");

            var res = await axios.post("http://localhost:5000/login", lgn);

            if (res.data.success) {

                setSms(res.data.message)

                nav("/");
            }
            else {
                setSms("Login Successsfully.")

            }


        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setSms(error.response.data.message)
            }
            else {
                setSms("something went Wrong..plz try Later")
            }
        }
    }

    return (
        <div>


            <div className="row">
                <div className="col-md-4 col-2"></div>
                <div className="col-md-4 col-10 shadow-lg " style={{ "borderRadius": "30px", "padding": "20px", "fontFamily": "sans-serif", "marginTop": "80px", "marginBottom": "50px" }}>
                    <center><hr /><h4 style={{ "fontWeight": "bold" }}> Login Account</h4></center><hr />
                    
                    <div className="alert alert-success" role="alert">
                        <h3>{sms}</h3>
                    </div>

                    Enter Name:
                    <input type="text" className="form-control" onInput={(e) => setName(e.target.value)} /><br />
                    Enter Pass:
                    <input type="text" className="form-control" onInput={(e) => setPass(e.target.value)} /><br />
                    <div>
                        <div className="d-flex align-items-center gap-3">
                            <button
                                className="btn btn-success"
                                onClick={() => login()}
                            >
                                Submit
                            </button>

                            <Link className="btn btn-primary" to="/create">
                                SignUp
                            </Link>
                        </div>
                        </div>

                    </div>  
                </div>
            </div>
            )
}
            export default  Login;