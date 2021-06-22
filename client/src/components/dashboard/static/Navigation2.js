import React from 'react';
import { auth } from "../../../Firebase/index";
import Avatar from '@material-ui/core/Avatar';

const Navigation2 = () => {
    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        auth.onAuthStateChanged(function(user) {
          if (user) {
              setUser(user);
          } else {
              window.location.href = "/";
          }
        });
    }, []);

    const logOut = () => {
        auth.signOut().then(function() {
            setUser({});
            sessionStorage.clear();
        }).catch(function(error) {
            console.log(error);
        });
    }
    
    return (
        <>
            <header id="slider-area">  
                <nav class="navbar navbar-expand-md fixed-top scrolling-navbar bg-white">
                    <div class="container">          
                    <a class="navbar-brand" href="/dashboard">
                        <img src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611766500/readestate/logo_yb2cqa.png" />
                        {/* <h5 style={{ color: '#F97794', fontSize: '4vh' }}>The Royal Condos</h5> */}
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="lni-menu"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mr-auto w-100 justify-content-end pt-1">
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="/dashboard">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="/floorplan">Floor Plans</a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="/daminities">Amenities</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="/dgallary">Gallary</a>
                        </li> 
                        <li class="nav-item ml-4 dropdown">
                            <Avatar className="dropbtn2" alt={user.displayName} src={user.photoURL} />
                            <div class="dropdown-content">
                                <a href="/reservedproperties">My Properties</a>
                                {/* <a href="#">Edit Profile</a> */}
                                <a onClick={logOut} href="#">Sign Out</a>
                            </div>
                        </li> 
                        
                        </ul>              
                    </div>
                    </div>
                </nav> 

                <div id="carousel-area">
                    <div id="carousel-slider" class="carousel slide carousel-fade" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-slider" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-slider" data-slide-to="1"></li>
                        <li data-target="#carousel-slider" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                        <img style={{ width: '100%' }} src="https://ionianluxuryhomes.com/wp-content/uploads/2018/08/Interior-Design.jpg" alt="Docs" />
                        <div class="carousel-caption text-left">
                            <h3 class="wow fadeInRight" data-wow-delay="0.2s">The Royal Condos</h3>  
                            <h2 style={{ fontSize: '9vh' }}  class="wow fadeInRight" data-wow-delay="0.4s">A Gateway To Luxurious Lifestyle</h2>
                            <a href="#" class="btn btn-lg btn-border wow fadeInRight" data-wow-delay="1.2s">Get Started!</a>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img style={{ width: '100%' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1611205988/readestate/20200219_19054-Royal-Bayview_Phase-II---Pool-3_low-res_g4tz1m.jpg" alt="Docs" />
                        <div class="carousel-caption text-center">
                            <h3 class="wow fadeInDown" data-wow-delay="0.3s">The Royal Condos</h3>
                            <h2 class="wow bounceIn" data-wow-delay="0.6s">100+ Diffrent Properties to See</h2> 
                            <a href="#" class="btn btn-lg btn-common btn-effect wow fadeInUp" data-wow-delay="1.2s">View Works</a>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img style={{ width: '100%' }} src="https://i.pinimg.com/originals/0a/6e/83/0a6e836a91837a3cf59692b1c723a519.jpg" alt="Docs" />
                        <div class="carousel-caption text-center">
                            <h3 class="wow fadeInDown" data-wow-delay="0.3s">The Royal Condos</h3>
                            <h2 class="wow fadeInRight" data-wow-delay="0.6s">Purchase Your Dream House Today</h2> 
                            <a href="#" class="btn btn-lg btn-border wow fadeInUp" data-wow-delay="0.9s">Get Started</a>
                        </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel-slider" role="button" data-slide="prev">
                        <span class="carousel-control" aria-hidden="true"><i class="lni-chevron-left"></i></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-slider" role="button" data-slide="next">
                        <span class="carousel-control" aria-hidden="true"><i class="lni-chevron-right"></i></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>
                </div>

                </header>
                <br />
        </>
    )
}

export default Navigation2
