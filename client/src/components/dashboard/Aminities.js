import React from 'react'
import Navigation from './static/Navigation';
import Container from '@material-ui/core/Container';
import Image from '../assets/JR.png';
import Footer from '../static/Footer';
import Contact from '../Contact';
import {
    BrowserView,
    MobileView
} from "react-device-detect";
const Aminities = () => {
    
    return (
        <>
            <Navigation />
            <img width="100%" className="img img-fluid mt-4" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611233408/readestate/rb-entrance_e33tup.jpg" />
            <Container style={{ marginBottom: '28px' }}>
                <h2 className="text-center mt-2">
                Amenities & Lifestyle
                </h2>
                <center>
                    <img className="w-100" src={Image} />
                </center>
                <br />
                <section className="mt-2 text-dark ml-4">
                <div className="container">
                    <div className="row mt-4 mb-4">
                        <div className="col-md mt-2">
                            <div className="card card-body shadow pleasework2 text-light font-weight-bold">
                                <h4 className="text-center text-light">
                                Phase 1
                                </h4>
                                <span className="h5 text-center">
                                90 SUITES <br />
                                14 STOREYS
                                </span>
                            </div>
                        </div>
                        <div className="col-md mt-2">
                            <div className="card card-body shadow pleasework2 text-light font-weight-bold">
                                <h4 className="text-center text-light">
                                Phase 2
                                </h4>
                                <span className="h5 text-center">
                                77 SUITES <br />
                                12 STOREYS
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4 mb-4">
                        <div className="col-md">
                            <div className="card card-body text-center text-light font-weight-bold pleasework border-0 h6">
                                <span className="h1">
                                    <i className="fas fa-star text-warning"></i>
                                </span>
                                Main Entrance <br />
                                <hr style={{ backgroundColor: 'white' }} />
                                Concierge <br />
                                <hr style={{ backgroundColor: 'white' }} />
                                Elevators – The Bayview <br />
                                <hr style={{ backgroundColor: 'white' }} />
                                Mail Room
                            </div>
                        </div>
                        <div className="col-md">
                            <div style={{ height: '98%' }} className="card card-body text-center text-light font-weight-bold pleasework border-0 h6">
                                <span className="h1">
                                    <i className="fas fa-star text-warning"></i>
                                </span>
                                Parcel Room <br />
                                <hr style={{ backgroundColor: 'white' }} />
                                Lobby Lounge <br />
                                <hr style={{ backgroundColor: 'white' }} />
                                Elevators – The Royal <br />
                            </div>
                        </div>
                    </div>

                    
                </div>
                </section>

                <BrowserView>
                <section className="mt-4">
                    <div className="row">
                        <div className="col-md">
                            <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611234895/readestate/rb-lobby_zjza4u.jpg" />
                        </div>
                        <div className="col">
                            <h2 style={{ marginTop: '25%' }} className="text-dark">
                            SENSORY GRATIFICATION
                            </h2>
                            <hr />
                            <p style={{ display: 'block' }}>
                            The grand lobby makes an indelible impression upon the senses with light flooding in through the two storey-high picture windows. Setting the interior design theme for Royal Bayview, it speaks of timeless elegance. The sweeping, curvaceous layout and surprising juxtaposition of bold and brash with soft and sumptuous take the European-inspired design one step closer to perfection.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md">
                            <h2 style={{ marginTop: '25%' }} className="text-dark">
                            LOWER LEVEL AMENITIES (P1)
                            </h2>
                            <hr />
                            <p>
                                1. Elevators – The Bayview <br />
                                2. Fireplace and Library Lounge <br />
                                3. Lower Lobby Lounge <br />
                                4. Indoor Pool and Whirlpool <br />
                                5. Changerooms <br />
                                6. Saunas <br />
                                7. Fitness Centre <br />
                                8. Yoga Room <br />
                                9. Salon <br />
                               10. Elevators – The Royal <br />
                               11. Amenity Outdoor Dining Space <br />
                               12. Dining Room <br />
                               13. Party Room <br />
                               14. Outdoor Space with Fireplace and Lounge <br />
                            </p>
                        </div>
                        <div className="col">
                            <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611235142/readestate/rb-amenities-lower_cjza6u.png" />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col">
                            <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611235514/readestate/js_g5jvx6.png" />
                        </div>
                        <div className="col-md">
                            <h2 style={{ marginTop: '25%' }} className="text-dark">
                            SOCIAL CIRCLE
                            </h2>
                            <hr />
                            <p style={{ display: 'block' }}>
                            Wind your way down the natural wood staircase into the lower lounge, an ideal space to socialize with friends, or for solo relaxation as you contemplate the highlights of the day golf game. Furnishings are designed for ultra-easy social connection, with rounded or curved seating and tables grouped together. Sculptures and an eye-catching feature wall balance out the look.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md">
                            <h2 style={{ marginTop: '25%' }} className="text-dark">
                            DINE IN STYLE
                            </h2>
                            <hr />
                            <p style={{ display: 'block' }}>
                            In this congenial space dedicated to the art of entertaining, understated colours and natural materials convey a feeling of warmth and welcome. Comfortable seating for a large group invites everyone to gather for a delicious dinner and sparkling conversation. The adjoining fully equipped kitchen makes it easy for DIY home cooks and catering chefs alike.
                            </p>
                        </div>
                        <div className="col">
                            <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611235608/readestate/js_jify0y.png" />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md">
                            <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611235703/readestate/js_fsocpa.png" />
                        </div>
                        <div className="col">
                            <h2 style={{ marginTop: '25%' }} className="text-dark">
                            THE ART OF ENTERTAINING
                            </h2>
                            <hr />
                            <p style={{ display: 'block' }}>
                            For any celebration, from birthdays to triumphs on the golf course, this well appointed space is the perfect backdrop for mixing and mingling. Pull up a chair at the bar and immerse yourself in an idyllic setting. Features and finishes curated from around the world come together in a stylish tableau.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md">
                            <h2 style={{ marginTop: '25%' }} className="text-dark">
                            RECHARGE & RENEW
                            </h2>
                            <hr />
                            <p style={{ display: 'block' }}>
                            Shift into lower gear and bask in the absolute comfort of a space devoted to downtime and leisure. After a round of golf or any time you feel the need to detach from everyday concerns, sink into a seat around the table and watch TV, read your favourite book in front of the fire, or gather with friends.
                            </p>
                        </div>
                        <div className="col">
                            <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611235835/readestate/js_wfc2bc.png" />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md">
                            <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611235931/readestate/js_tj5hms.png" />
                        </div>
                        <div className="col">
                            <h2 style={{ marginTop: '25%' }} className="text-dark">
                            MOOD LIFT
                            </h2>
                            <hr />
                            <p style={{ display: 'block' }}>
                            For exercise or simply as a mood changer, immerse yourself in the indoor pool and whirlpool — always a refreshing experience. Restore your equilibrium any time of year in the pool’s clear waters. You’re guaranteed to feel reinvigorated, with a fresh outlook on the day or evening ahead.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md">
                            <h2 style={{ marginTop: '25%' }} className="text-dark">
                            PERFECT FORM
                            </h2>
                            <hr />
                            <p style={{ display: 'block' }}>
                            Calming neutral colours and natural wood surfaces in the yoga studio and fitness space create an environment without distractions where you can focus on every movement and every breath. Top-of-the-line equipment and change rooms finished in marble, wicker and ceramics enhance the experience of visiting this amenity.
                            </p>
                        </div>
                        <div className="col">
                            <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611236002/readestate/j_epo0y8.png" />
                        </div>
                    </div>
                </section>
                </BrowserView>

                <MobileView>
                    <section className="mt-4">
                        <div className="row">
                            <div className="col-md">
                                <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611234895/readestate/rb-lobby_zjza4u.jpg" />
                            </div>
                            <div className="col">
                                <h2 style={{ marginTop: '25%' }} className="text-dark">
                                SENSORY GRATIFICATION
                                </h2>
                                <hr />
                                <p style={{ display: 'block' }}>
                                The grand lobby makes an indelible impression upon the senses with light flooding in through the two storey-high picture windows. Setting the interior design theme for Royal Bayview, it speaks of timeless elegance. The sweeping, curvaceous layout and surprising juxtaposition of bold and brash with soft and sumptuous take the European inspired design one step closer to perfection.
                                </p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md">
                                <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611235142/readestate/rb-amenities-lower_cjza6u.png" />
                            </div>
                            <div className="col">
                                <h2 style={{ marginTop: '25%' }} className="text-dark">
                                LOWER LEVEL AMENITIES (P1)
                                </h2>
                                <hr />
                                <p>
                                    1. Elevators – The Bayview <br />
                                    2. Fireplace and Library Lounge <br />
                                    3. Lower Lobby Lounge <br />
                                    4. Indoor Pool and Whirlpool <br />
                                    5. Changerooms <br />
                                    6. Saunas <br />
                                    7. Fitness Centre <br />
                                    8. Yoga Room <br />
                                    9. Salon <br />
                                10. Elevators – The Royal <br />
                                11. Amenity Outdoor Dining Space <br />
                                12. Dining Room <br />
                                13. Party Room <br />
                                14. Outdoor Space with Fireplace and Lounge <br />
                                </p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md">
                                <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611235514/readestate/js_g5jvx6.png" />
                            </div>
                            <div className="col">
                                <h2 style={{ marginTop: '25%' }} className="text-dark">
                                SOCIAL CIRCLE
                                </h2>
                                <hr />
                                <p style={{ display: 'block' }}>
                                Wind your way down the natural wood staircase into the lower lounge, an ideal space to socialize with friends, or for solo relaxation as you contemplate the highlights of the day golf game. Furnishings are designed for ultra-easy social connection, with rounded or curved seating and tables grouped together. Sculptures and an eye-catching feature wall balance out the look.
                                </p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md">
                                <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611235608/readestate/js_jify0y.png" />
                            </div>
                            <div className="col">
                                <h2 style={{ marginTop: '25%' }} className="text-dark">
                                DINE IN STYLE
                                </h2>
                                <hr />
                                <p style={{ display: 'block' }}>
                                In this congenial space dedicated to the art of entertaining, understated colours and natural materials convey a feeling of warmth and welcome. Comfortable seating for a large group invites everyone to gather for a delicious dinner and sparkling conversation. The adjoining fully equipped kitchen makes it easy for DIY home cooks and catering chefs alike.
                                </p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md">
                                <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611235703/readestate/js_fsocpa.png" />
                            </div>
                            <div className="col">
                                <h2 style={{ marginTop: '25%' }} className="text-dark">
                                THE ART OF ENTERTAINING
                                </h2>
                                <hr />
                                <p style={{ display: 'block' }}>
                                For any celebration, from birthdays to triumphs on the golf course, this well appointed space is the perfect backdrop for mixing and mingling. Pull up a chair at the bar and immerse yourself in an idyllic setting. Features and finishes curated from around the world come together in a stylish tableau.
                                </p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md">
                                <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611235835/readestate/js_wfc2bc.png" />
                            </div>
                            <div className="col">
                                <h2 style={{ marginTop: '25%' }} className="text-dark">
                                RECHARGE & RENEW
                                </h2>
                                <hr />
                                <p style={{ display: 'block' }}>
                                Shift into lower gear and bask in the absolute comfort of a space devoted to downtime and leisure. After a round of golf or any time you feel the need to detach from everyday concerns, sink into a seat around the table and watch TV, read your favourite book in front of the fire, or gather with friends.
                                </p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md">
                                <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611235931/readestate/js_tj5hms.png" />
                            </div>
                            <div className="col">
                                <h2 style={{ marginTop: '25%' }} className="text-dark">
                                MOOD LIFT
                                </h2>
                                <hr />
                                <p style={{ display: 'block' }}>
                                For exercise or simply as a mood changer, immerse yourself in the indoor pool and whirlpool — always a refreshing experience. Restore your equilibrium any time of year in the pool’s clear waters. You’re guaranteed to feel reinvigorated, with a fresh outlook on the day or evening ahead.
                                </p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md">
                                <img width="100%" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611236002/readestate/j_epo0y8.png" />
                            </div>
                            <div className="col">
                                <h2 style={{ marginTop: '25%' }} className="text-dark">
                                PERFECT FORM
                                </h2>
                                <hr />
                                <p style={{ display: 'block' }}>
                                Calming neutral colours and natural wood surfaces in the yoga studio and fitness space create an environment without distractions where you can focus on every movement and every breath. Top-of-the-line equipment and change rooms finished in marble, wicker and ceramics enhance the experience of visiting this amenity.
                                </p>
                            </div>
                        </div>
                    </section>
                </MobileView>
            </Container>
            <Contact />
            <Footer />
        </>
    )
}

export default Aminities
