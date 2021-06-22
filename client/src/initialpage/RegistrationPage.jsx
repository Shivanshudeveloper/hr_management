/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo} from '../Entryfile/imagepath.jsx'
import { auth } from '../Firebase/index.js';


class Registrationpage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.updateState = this.updateState.bind(this);
  }

	/**
	 * On User Login
	 */
    updateState(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    signUp = e => {
      var em = this.state.email;
      var pass = this.state.password;
      console.log(em, pass);
      auth.createUserWithEmailAndPassword(em, pass)
        .then(() => {
          var user = auth.currentUser;
          user.sendEmailVerification().then(function() {
            window.location.href = "/login?v=e";
          }).catch(function(error) {
            console.error(error);
          });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }

    onApplyJob = e => {
        e.preventDefault();
        localStorage.removeItem('jobview')
        this.props.history.push('/applyjob/joblist')
    }

   render() {
      const { email, password } = this.state;
      const { loading } = this.props;
      return (
            
            <div className="main-wrapper">
              <Helmet>
                  <title>Register - HRMS Admin Template</title>
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
                <h3 className="account-title">Register</h3>
                <p className="account-subtitle">Access to our dashboard</p>
                {/* Account Form */}
                <form action="/light/app/main/dashboard">
                  <div className="form-group">
                    <label>Email</label>
                    <input name='email' value = {this.state.email} onChange = {this.updateState} className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input name='password' value = {this.state.password} onChange = {this.updateState} className="form-control" type="password" />
                  </div>
                  <div className="form-group">
                    <label>Repeat Password</label>
                    <input className="form-control" type="password" />
                  </div>
                  <div className="form-group text-center">
                    <button className="btn btn-primary account-btn" onClick={this.signUp} type="button">Register</button>
                  </div>
                  <div className="account-footer">
                    <p>Already have an account? <a href="/light/login">Login</a></p>
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


export default Registrationpage;
