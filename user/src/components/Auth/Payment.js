import React from 'react';
import {
  Form, FormGroup, Label, Input
} from 'reactstrap';

class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div >


        <h4> Payment Method </h4>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-md col-sm col-xs">
            <img src={require("../../images/payment-account.svg")} width="100" alt="individual" />
          </div>
          <div className="col-lg-6 col-md col-sm col-xs">
            <img src={require("../../images/payment-card.svg")} width="100" alt="fleet" />
          </div>

          <h4> Enter Account Details </h4>


          <Form vertical>
            <FormGroup >
              <Label for="exampleEmail" className="mr-sm-2">Bank verification no</Label>
              <Input type="name" />
            </FormGroup>
            <FormGroup >
              <Label for="examplePassword" className="mr-sm-2">Account number</Label>
              <Input type="email" />
            </FormGroup>
            <FormGroup >
              <Label for="examplePassword" className="mr-sm-2">Bank</Label>
              <Input type="number" />
            </FormGroup>
          </Form>
        </div>
      </div>



    );
  }
}

export default Payment;
