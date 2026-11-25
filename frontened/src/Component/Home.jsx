import React from "react";

import { Link } from "react-router-dom";

function Home() {
    return (
        <div>

            <div className="row">
                <div className="col-md-3 "></div>
                <div className="col-md-6 " style={{ "padding": "20px", "textAlign": "center", "fontFamily": "sans-serif", "marginTop": "10px", "marginBottom": "50px" }}>
                    <br />
                    <br />
                    <h2 style={{ "fontWeight": "bold" }}>Welcome to Apna Bank</h2>
                    <br />
                    <p>"A secure and user-freindly Online Banking System that simplifie financial management, enabling seamless transactions, real time balance tracking, and efficient account control anytime, anywhere.
                        From Balance Checks to fund tranfers and bills payments, everything is designed to give you complete control of your finances with ease and Confidence."
                        <br /><br /><br />
                        <b><u>OUR MOTIVE</u></b>
                        <br /><br />
                        1. Your Money, Your Control.<br />
                        2. Banking Made Simple And Secure.<br />
                        3. Fast, Safe, Digital Banking.<br />
                        4. Expireince the Future of Banking.<br />
                        <br /><br /><br />
                        <b>Stay in control of your money with Fast, Reliable and Smart Digital Banking Solution.</b>
                    </p>
                </div>
            </div>



            <div className="row">
                <div className="col-md-2 "></div>
                <div className="col-md-4 col-6 " style={{ "borderRadius": "20px", "height": "190px", padding: "10px", "textAlign": "center" }}><br />
                    <i
                        className="fa-solid fa-building-columns fa-xl fa-width-auto"
                        style={{
                            borderRadius: "50%",
                            width: "90px",
                            height: "90px",
                            fontSize: "100px",
                            backgroundColor: "white",
                            color: "blue",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    ></i>
                    <Link className="nav-link active p" to="/create" style={{ "color": "black", fontWeight: "bold" }}>CreateAccount</Link>
                </div>
                <div className="col-md-4 col-6  carousel carousel-dark slide" id="carouselExampleDark" data-bs-ride="carousel" style={{ "borderRadius": "20px", "height": "190px", padding: "10px", "alignContent": "center" }}><br />
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div class="carousel-inner"><center>
                        <div class="carousel-item active" data-bs-interval="10000">
                            <i
                                className="fa-solid fa-mobile-retro fa-xl fa-width-auto"
                                style={{
                                    borderRadius: "50%",
                                    width: "90px",
                                    height: "90px",
                                    fontSize: "100px",
                                    backgroundColor: "white",
                                    color: "rgb(255,212,59)",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            ></i>                            <div>
                                <p className="p"><b>Online Banking!</b></p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="1900">

                            <i
                                className="fa-regular fa-money-bill-1 lg"
                                style={{
                                    borderRadius: "50%",
                                    width: "90px",
                                    height: "90px",
                                    fontSize: "100px",
                                    backgroundColor: "white",
                                    color: "rgb(255,212,59)",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            ></i>       

                            <div>
                                <p className="p"><b>Your money, your Control!</b></p>
                            </div>
                        </div>
                        <div class="carousel-item">

                             <i
                        className="fa-solid fa-scale-unbalanced "
                        style={{
                            borderRadius: "50%",
                            width: "90px",
                            height: "90px",
                            fontSize: "80px",
                            backgroundColor: "white",
                            color: "rgb(255,212,59)",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    ></i>
                            <div>
                                <p className="p"><b>Banking Made Simple And Secure!</b></p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="1900">

                              <i
                        className="fa-solid fa-vault "
                        style={{
                            borderRadius: "50%",
                            width: "90px",
                            height: "90px",
                            fontSize: "80px",
                            backgroundColor: "white",
                            color: "rgb(255,212,59)",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    ></i>

                            
                            <div>
                                <p className="p"><b>Fast, Safe, Digital Banking!</b></p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="1900">

                              <i
                        className="fa-solid fa-robot "
                        style={{
                            borderRadius: "50%",
                            width: "90px",
                            height: "90px",
                            fontSize: "80px",
                            backgroundColor: "white",
                            color: "rgb(255,212,59)",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    ></i>


                            <div>
                                <p className="p"><b>Expireince the Future of Banking!</b></p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="1900">

                              <i
                        className="fa-solid fa-user-lock "
                        style={{
                            borderRadius: "50%",
                            width: "90px",
                            height: "90px",
                            fontSize: "80px",
                            backgroundColor: "white",
                            color: "rgb(255,212,59)",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    ></i>


                            <div>
                                <p className="p"><b>Secure Your Account with strong Password!</b></p>
                            </div>
                        </div>
                    </center>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    <br />
                </div>
            </div><br /><br/>


            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2 col-3  " style={{ "borderRadius": "20px", padding: "10px", "height": "180px", "textAlign": "center" }}><br />
                    <img src="withdraw.png" style={{ "borderRadius": "50%", width: "60px", height: "60px" }} />
                    <Link className="nav-link active p" to="/withdraw" style={{ "color": "black", fontWeight: "bold" }}>Withdraw Amount</Link><br />
                </div>
                
                <div className="col-md-2 col-3  " style={{ "borderRadius": "20px", padding: "10px", "height": "180px", "textAlign": "center" }}><br />
                    <img src="dep.png" style={{ "borderRadius": "50%", width: "60px", height: "60px" }} />
                    <Link className="nav-link active p" to="/deposit" style={{ "color": "black", fontWeight: "bold" }}>Deposit Amount</Link>
                    <br />
                </div>
                
                <div className="col-md-2 col-3  " style={{ "borderRadius": "20px", padding: "10px", "height": "180px", "textAlign": "center" }}><br />
                    <img src="transfer.png" style={{ "borderRadius": "50%", width: "60px", height: "60px" }} />
                    <Link className="nav-link active p" to="/fund" style={{ "color": "black", fontWeight: "bold" }}>FundTransfer</Link>
                </div>
                
                <div className="col-md-2 col-3  " style={{ "borderRadius": "20px", padding: "10px", "height": "180px", "textAlign": "center" }}><br />
                    <img src="pin.png" style={{ "borderRadius": "50%", width: "60px", height: "60px" }} />
                    <Link className="nav-link active p" to="/pin" style={{ "color": "black", fontWeight: "bold" }}>Pin Change.</Link><br />
                </div>
            </div>

            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3 col-3" style={{ "borderRadius": "20px", padding: "10px", "height": "180px", "textAlign": "center" }}>
                    <img src="summary.png" style={{ "borderRadius": "50%", width: "60px", height: "80px" }} />
                    <Link className="nav-link active p" to="/accountsum" style={{ "color": "black", fontWeight: "bold" }}>Account Summary</Link>

           </div>
           <br/>

            <div className="col-md-2 col-3" style={{ "borderRadius": "20px", padding: "10px", "height": "180px", "textAlign": "center" }}>
                    <img src="Balance.png" style={{ "borderRadius": "50%", width: "100px", height: "80px" }} />
                    <Link className="nav-link active p" to="/balance" style={{ "color": "black", fontWeight: "bold" }}>Balance Summary</Link>

           </div>
           



            </div>
            
            
            
            <br />
            <br/>
            <div className="row">
                <div className="col" style={{ "padding": "20px", "color": "whitesmoke", "backgroundColor": "rgb(190,0,0", "textAlign": "center", "fontFamily": "-apple-system", "position": "absolute" }}>
                    <p>Secure, fast and reliable banking at your fingertips -- manage your finances anytime with ease and confidence on our trusted digital platform.<br />For assistance, contact |📧:support@apnabank.com ||📞:+91 85962 35245.<br />©️2026 ApnaBank.<br />All Rights Reserved.</p>
                </div>
            </div>
                       
        </div>
    )
}
export default Home;