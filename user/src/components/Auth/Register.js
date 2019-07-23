import React from 'react';

import {
  Button

} from 'reactstrap';

import Customer from "./Customer";
import Vehicle from "./Vehicle";
import Schedule from "./Schedule";
import Payment from "./Payment";
import Payment2 from "./Payment2";


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div>

        <Button className="button1" outline color="secondary " data-toggle="modal" data-target="#modalLRForm">Get Started</Button>


        <div class="modal fade" id="modalLRForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog cascading-modal" role="document">

            <div class="modal-content">

              <div class="modal-c-tabs">
                <ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                  <li class="nav-item">
                    <img src={require("../../images/get-started-icon.svg")} width="40" alt="josla" />
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#panel7" role="tab">
                      Customer</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#panel8" role="tab">
                      Vehicle</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#panel9" role="tab">
                      Schedule</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#panel10" role="tab">
                      Payment</a>
                  </li>
                </ul>

                <div class="tab-content">
                  <div class="tab-pane fade in show active" id="panel7" role="tabpanel">

                    <div class="modal-body mb-1">
                      <Customer />

                    </div>
                    <div class="modal-footer">
                      <div class="options text-center text-md-right mt-1">
                        <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pay Now / Pay on Delivery</button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Pay Now</button>
                            <button class="dropdown-item" type="button">Pay on Delivery</button>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="btn btn-outline-info waves-effect ml-auto" >Next</button>
                    </div>

                  </div>
                  <div class="tab-pane fade" id="panel8" role="tabpanel">

                    <div class="modal-body">
                      <Vehicle />


                    </div>
                    <div class="modal-footer">
                      <div class="options text-right">
                        <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pay Now / Pay on Delivery</button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Pay Now</button>
                            <button class="dropdown-item" type="button">Pay on Delivery</button>
                          </div>
                        </div>

                      </div>
                      <button type="button" class="btn btn-outline-info waves-effect ml-auto" >Next</button>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="panel9" role="tabpanel">

                    <div class="modal-body">
                      <Schedule />

                    </div>
                    <div class="modal-footer">
                      <div class="options text-right">
                        <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pay Now / Pay on Delivery</button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Pay Now</button>
                            <button class="dropdown-item" type="button">Pay on Delivery</button>
                          </div>
                        </div>

                      </div>
                      <button type="button" class="btn btn-outline-info waves-effect ml-auto" >Next</button>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="panel10" role="tabpanel">

                    <div class="modal-body">
                      <div>
                        <div className="row d-flex align-items-center justify-content-center">
                          <div className="col-lg col-md col-sm col-xs">
                            <Payment />
                          </div>
                          <div className=" review col-lg col-md col-sm col-xs ">
                            <Payment2 />
                          </div>
                          <p>By placing this order you agree to allow Josla to save your payment info to pay for future services as described in the terms of service.</p>
                        </div>
                      </div>

                    </div>
                    <div class="modal-footer">
                      <div class="options text-right">
                        <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pay Now / Pay on Delivery</button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button">Pay Now</button>
                            <button class="dropdown-item" type="button">Pay on Delivery</button>
                          </div>
                        </div>
                      </div>
                      <button type="button" class="btn btn-outline-info waves-effect ml-auto" >Make Payment</button>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default Register;
