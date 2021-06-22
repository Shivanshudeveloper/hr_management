import React from 'react'

const Navigation = () => {
    return (
        <>
           <header className="header-area">
                <div className="navbar-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="index.html">
                                        <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1610042386/onlinesaas/Logo_upw7zu.png" alt="Logo" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <a style={{ color: 'rgb(181, 63, 25)' }} className="page-scroll" href="#home">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a style={{ color: 'rgb(181, 63, 25)' }} className="page-scroll" href="#why">Features</a>
                                            </li>
                                            <li className="nav-item">
                                                <a style={{ color: 'rgb(181, 63, 25)' }} className="page-scroll" href="#pricing">Pricing</a>
                                            </li>
                                            <li className="nav-item">
                                                <a style={{ color: 'rgb(181, 63, 25)' }} className="page-scroll" href="#download">Contact</a>
                                            </li>
                                            <li className="nav-item">
                                                <a style={{ color: 'rgb(181, 63, 25)' }} className="page-scroll" href="/login">Login</a>
                                            </li>
                                        </ul>
                                        <a style={{ backgroundColor: '#b53f19', border: '2px solid #b53f19' }} className="main-btn ml-3" href="/login">Sign Up </a>
                                    </div> 
                                </nav> 
                            </div>
                        </div> 
                    </div> 
                </div>

                <div id="home" className="header-hero bg_cover d-lg-flex align-items-center">
                    <div style={{ marginTop: '138px' }} className="container text-center">
                        <div className="row align-items-center justify-content-center justify-content-lg-between">
                            <div className="col">
                                <div className="header-hero-content">
                                    <h3 className="header-title wow fadeInLeftBig font-weight-bold text-dark" data-wow-duration="1.3s" data-wow-delay="0.2s">Employee Onboarding Made Simple</h3>
                                    <h4 style={{ marginTop: '6px' }} className="wow fadeInLeftBig font-weight-bold text-dark" data-wow-duration="1.3s" data-wow-delay="0.2s">Paperless OnBoarding | Remote I-9 | Smart Workflow | Compliance Engine</h4>
                                    <br />
                                    <a href="#!" style={{ backgroundColor: '#b53f19', border: '2px solid #b53f19' }} rel="nofollow" className="main-btn wow fadeInLeftBig mr-2" data-wow-duration="1.3s" data-wow-delay="0.8s">Get Started for Free <i className="fas fa-arrow-right ml-2"></i> </a>
                                    <a href="#!" rel="nofollow" className="otherbutton btn btn-outline-dark fadeInLeftBig wow" data-wow-duration="1.3s" data-wow-delay="0.8s">Learn more</a>
                                </div> 
                            </div>
                        </div>
                        <br />
                        <br />
                        <img  className="wow fadeInLeftBig" data-wow-duration="1.6s" data-wow-delay="1.4s" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1609914789/onlinesaas/saas_yv8e4e.jpg" />
                    </div> 
                    <div className="header-shape-1"></div> 
                    <div className="header-shape-2">
                        <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1610082929/onlinesaas/header-shape-2_hhjzaa.svg" alt="shape" />
                    </div>
                </div>
            </header> 
        </>
    )
}

export default Navigation
