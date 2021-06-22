/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Avatar_01,Avatar_16, Avatar_08, Avatar_13, Avatar_05 } from "../../Entryfile/imagepath"


class ApiDashboard extends Component {

   render() {
     
      return ( 
             <div className="page-wrapper">
             <Helmet>
                <title>API Dashboard - HRMS Admin Template</title>
                <meta name="description" content="Login page"/>					
             </Helmet>
             {/* Page Content */}
             <div className="content">
               {/* Page Header */}
               <div className="page-header">
                 <div className="row">
                   <div className="col-sm-12">
                     <h3 className="page-title">API Dashboard</h3>
                     <ul className="breadcrumb">
                       <li className="breadcrumb-item"><a href="/light/app/main/dashboard">Dashboard</a></li>
                       <li className="breadcrumb-item active">API Dashboard</li>
                     </ul>
                   </div>
                 </div>
               </div>
               {/* /Page Header */}
               <div className="">
               <section id="tabs" class="">
                <div class="">
                    <div class="row">
                        <div class="col">
                            <nav>
                                <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Paypal</a>
                                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Stripe</a>
                                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Razorpay</a>
                                    <a class="nav-item nav-link" id="nav-paystack-tab" data-toggle="tab" href="#nav-paystack" role="tab" aria-controls="nav-paystack" aria-selected="false">Paystack</a>
                                    <a class="nav-item nav-link" id="nav-mollie-tab" data-toggle="tab" href="#nav-mollie" role="tab" aria-controls="nav-mollie" aria-selected="false">Mollie</a>
                                    <a class="nav-item nav-link" id="nav-authorize-tab" data-toggle="tab" href="#nav-authorize" role="tab" aria-controls="nav-authorize" aria-selected="false">Authorize.net</a>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="card card-body">
                                      <div className="row">
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Paypal Client ID</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Paypal Secret</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Webhook URL</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                      </div>
                                      <button className="btn btn-success">Save</button>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                  <div className="card card-body">
                                      <div className="row">
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Stripe Client ID</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Stripe Secret</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Webhook URL</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                      </div>
                                      <button className="btn btn-success">Save</button>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div className="card card-body">
                                      <div className="row">
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Razorpay Client ID</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Razorpay Secret</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Webhook URL</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                      </div>
                                      <button className="btn btn-success">Save</button>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="nav-paystack" role="tabpanel" aria-labelledby="nav-paystack-tab">
                                    <div className="card card-body">
                                      <div className="row">
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Paystack Client ID</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Paystack Secret</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Webhook URL</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                      </div>
                                      <button className="btn btn-success">Save</button>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="nav-mollie" role="tabpanel" aria-labelledby="nav-mollie-tab">
                                    <div className="card card-body">
                                      <div className="row">
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Mollie Client ID</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Mollie Secret</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Webhook URL</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                      </div>
                                      <button className="btn btn-success">Save</button>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="nav-authorize" role="tabpanel" aria-labelledby="nav-authorize-tab">
                                    <div className="card card-body">
                                      <div className="row">
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Authorize.net Client ID</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Authorize.net Secret</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col">
                                          <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Webhook URL</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                          </div>
                                        </div>
                                      </div>
                                      <button className="btn btn-success">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
               </div>
             </div>
             {/* /Page Content */}
           </div>

      );
   }
}
import { Form } from 'reactstrap';

export default ApiDashboard;
