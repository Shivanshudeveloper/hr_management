import React from 'react'
import Navigation2 from './static/Navigation';
import Container from '@material-ui/core/Container';
import Footer from '../static/Footer';
const Contact = () => {
    
    return (
        <>
            <Navigation2 />
            <Container style={{ marginTop: '5%', marginBottom: '28px' }}>
                <h2 className="text-center" style={{ marginBottom: '8px' }}>
                Contact Us
                </h2>
                <section id="contact" className="section">      
                    <div className="contact-form">
                        <div className="container">
                        <div className="row">          
                            <div className="col-lg-9 col-md-9 col-xs-12">
                            <div className="contact-block">
                                <form id="contactForm">
                                <div className="row">
                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                                        <div className="help-block with-errors"></div>
                                    </div>                                 
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" placeholder="Your Email" id="email" className="form-control" name="name" required data-error="Please enter your email" />
                                        <div className="help-block with-errors"></div>
                                    </div> 
                                    </div>
                                    <div className="col">
                                    <div className="form-group">
                                        <textarea placeholder="Message" rows="4" cols="80" className="form-control"></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div> 
                                    </div>
                                    <div className="col-md-12">
                                    <div className="submit-button">
                                        <button className="btn btn-block btn-common btn-effect" id="submit" type="submit">Submit</button>
                                        <div id="msgSubmit" className="h3 hidden"></div> 
                                        <div className="clearfix"></div> 
                                    </div>
                                    </div>
                                </div>            
                                </form>
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-xs-12">
                            <div className="contact-deatils">
                                <div className="contact-info_area">
                                <div className="contact-info">
                                    <i className="lni-map"></i>
                                    <h5>Location</h5>
                                    <p>1900 Pico Blvd, New York br Centernial, colorado</p>
                                </div>
                                <div className="contact-info">
                                    <i className="lni-star"></i>
                                    <h5>E-mail</h5>
                                    <p>info@example.com</p>
                                </div>
                                <div className="contact-info">
                                    <i className="lni-phone"></i>
                                    <h5>Phone</h5>
                                    <p>+48 123 456 789</p>
                                </div>
                                <ul className="footer-social">
                                    <li><a className="facebook" href="#"><i className="lni-facebook-filled"></i></a></li>
                                    <li><a className="twitter" href="#"><i className="lni-twitter-filled"></i></a></li>
                                    <li><a className="linkedin" href="#"><i className="lni-linkedin-fill"></i></a></li>
                                    <li><a className="google-plus" href="#"><i className="lni-google-plus"></i></a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>            
                </section>
                <br />
                <br />
            </Container>
            <Footer />
        </>
    )
}

export default Contact
