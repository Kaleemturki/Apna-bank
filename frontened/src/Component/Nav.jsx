import React,{useState,useEffect} from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";


function Nav() {

    const nav=useNavigate();


var [st,setSt]=useState(false)
var [uname,setUName]=useState()
    

var checkuser=async ()=>{

            var
             res = await axios.get("http://localhost:5000/checksession");
            console.log(res.data)
            if(res.data.st)
            {
                setSt(true)
                setUName(res.data.uname)
            }
            else
            {
                setSt(false)
                setUName("")
            }

    }
    checkuser()

    var getlogout= async ()=>{
        var res=await axios.get("http://localhost:5000/lout")
        
        alert("Logout Successfully")
        nav("/")


    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">



                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Apna Bank.</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/accountsum">Summary</Link>
                                    </li>

                                </ul>

                                    {
                                        st?

                                <div className="ms-auto text-white">

                                        Welcome &emsp; {uname}
                                        &emsp; 
                                    <Link
                                        className="btn btn-danger text-light"
                                        onClick={()=>getlogout()}
                                    >
                                        Logout
                                    </Link>
                                  </div>
                                  :      

                                <div className="ms-auto">

                                    <Link
                                        className="btn btn-light text-primary"
                                        to="/login"
                                    >
                                        Login
                                    </Link> &emsp;

                                     <Link
                                        className="btn btn-success text-dark"
                                        to="/register"
                                    >
                                        SignUp
                                    </Link>







                                </div>
}

                            </div>
                        </div>

                    </nav>
                    <br/>
                                        <img src="2.jpeg" className="img-fluid w-70 " alt="Bank" />





                </div>
            </div>
        </div>
    )
}

export default Nav;