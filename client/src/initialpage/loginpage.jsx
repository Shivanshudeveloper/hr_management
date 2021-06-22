/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo} from '../Entryfile/imagepath.jsx'
import { auth } from '../Firebase/index.js';

class Loginpage extends Component {

   constructor(props) {
     super(props);
     this.state = {
       email: '',
       password: ''
     };
     this.updateState = this.updateState.bind(this);
     this.loginclick = this.loginclick.bind(this);
   }
      
   

    updateState(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    loginclick =() => {
      var em = this.state.email;
      var pass = this.state.password;
      
      if (em === "company@gmail.com") {
          window.location.href = "/light/app/main/dashboard";
      } else if ( em === "employee@gmail.com" ) {
          window.location.href = "/light/app/main/employee-dashboard";
      } else if ( em === "superadmin@gmail.com" ) {
          window.location.href = "/light/app/main/superadmin-dashboard";
      } else {
        window.location.href = "/light/app/main/employee-dashboard";
        // auth.signInWithEmailAndPassword(em, pass)
        // .then(() => {
        //     auth.onAuthStateChanged(function(user) {
        //         if (user) {
        //           sessionStorage.setItem("userId", user.uid);
        //           sessionStorage.setItem("email", user.email);
        //           window.location.href = "/light/app/main/dashboard";
        //         } else {
        //             console.log("No User");
        //         }
        //     });
        // })
        // .catch(function(error) {
        //     var errorCode = error.code;
        //     if ( errorCode === "auth/wrong-password" ) {
        //       console.log("Wrong Password");
        //     } else if ( errorCode === "auth/user-not-found" ) {
        //       console.log("No USer");
        //     }
        // });
      }
    }


   render() {
     
      return (
         
         
         <div className="main-wrapper">
           <Helmet>
               <title>Login - HRMS Admin Template</title>
               <meta name="description" content="Login page"/>					
         </Helmet>
        <div className="account-content">
          <a href="/light/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</a>
          <div className="container">
            {/* Account Logo */}
            <div className="account-logo">
              <a href="/light/app/main/dashboard"><img className="w-25" src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1610042386/onlinesaas/Logo_upw7zu.png" alt="Dreamguy's Technologies" /></a>
            </div>
            {/* /Account Logo */}
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Login</h3>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Account Form */}
                <form action="/light/app/main/dashboard">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input name='email' value = {this.state.email} onChange = {this.updateState} className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label>Password</label>
                      </div>
                      <div className="col-auto">
                        <a className="text-muted" href="/light/forgotpassword">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <input name='password' value = {this.state.password} onChange = {this.updateState} className="form-control" type="password" />
                  </div>
                  <div className="form-group text-center">
                    <a className="btn btn-primary account-btn" onClick={this.loginclick}>
                    Login</a>
                  </div>
                  <div className="account-footer">
                    <p>Don't have an account yet? <a href="/light/register">Register</a></p>
                  </div>
                </form>
                {/* /Account Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
      );
   }
}

export default Loginpage;
