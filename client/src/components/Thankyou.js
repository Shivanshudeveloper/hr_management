import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import HomePage from './HomePage';

const stripePromise = loadStripe('pk_test_DQdHFh81YCgnoKyEDoaubyhz');

const Payment = () => {
    return (
        <>
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

        <section style={{ marginTop: '20%' }} className="container">
            <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Well done!</h4>
            <p>
                Your account has been upgraded to Premimum
            </p>
            <hr />
            </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />

        <footer id="footer" className="footer-area">
            <div className="footer-shape shape-8">
                <img className="svg" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1610082701/onlinesaas/footer-shape_hyxfcw.svg" alt="Shape" />
            </div>
            
            <div className="footer-widget pt-30 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col mt-50 wow fadeIn float-left" data-wow-duration="1.3s" data-wow-delay="0.2s">
                            <div className="row">
                                <div className="col">
                                    <a className="logo h2" href="#" >
                                        <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1610042386/onlinesaas/Logo_upw7zu.png" alt="Logo" />
                                    </a>
                                    <p className="text w-75">
                                        Employee OnBoarding has become complex with growing compliance requirements and employees working remotely now. We've built a market-leading OnBoarding platform that makes day-to-day <br /> work easier, more transparent and efficient for Human Resources professionals to use.
                                    </p>
                                    <ul className="social">
                                        <li>
                                        <p className="text"><i className="lni lni-map"></i> 717 K Street STE207 <br />SACRAMENTO CA 95814</p>
                                        <p className="text">support@hrdeck.com</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <form>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label for="exampleInputEmail1" className="form-label font-weight-bold text-dark">First & Last Name</label>
                                                    <input type="text" placeholder="i.e. John Doe" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label for="exampleInputEmail1" className="form-label font-weight-bold text-dark">Email</label>
                                                    <input type="text" placeholder="i.e. john@mail.com" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label for="exampleInputEmail1" className="form-label font-weight-bold text-dark">Phone Number</label>
                                                    <input type="text" placeholder="i.e. +1-234-567-7890" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label for="exampleInputEmail1" className="form-label font-weight-bold text-dark">Subject</label>
                                                    <input type="text" placeholder="i.e. I need a help" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label for="exampleFormControlTextarea1" className="form-label font-weight-bold text-dark">Message</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                                        </div>
                                        <button type="submit" style={{ backgroundColor: '#b53f19', border: '2px solid #b53f19' }} className="main-btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                    
                </div>
            </div>
            
            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright d-sm-flex justify-content-between">
                                <div className="copyright-text text-center">
                                    <p className="text">Copyright©2021 HDRECK.COM, All rights reserved.</p>
                                </div> 
                                <div className="copyright-privacy text-center">
                                    <p>
                                        <a href="#!">Terms of Use | Privacy Policy</a> | <a href="#!">Support</a> 
                                    </p>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div> 
            </div>
        </footer>

        </>
    )
}

export default Payment
