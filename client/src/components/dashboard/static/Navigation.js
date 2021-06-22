import React from 'react';
import { auth } from "../../../Firebase/index";
import Avatar from '@material-ui/core/Avatar';

const Navigation = () => {
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

                </header>
                <br />
        </>
    )
}

export default Navigation
