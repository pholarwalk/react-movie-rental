import React from 'react';

import {
  Form, FormGroup, Label, Input
} from 'reactstrap';

class Customer extends React.Component {
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
      <div>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg col-md col-sm col-xs">
            <h4> Select a Type </h4>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg col-md col-sm col-xs">
              <img src={require("../../images/selected-individual.svg")} width="100" alt="individual" />
            </div>
            <div className="col-lg col-md col-sm col-xs">
              <img src={require("../../images/select-fleet.svg")} width="100" alt="fleet" />
            </div>
          </div>
        </div>


        <div>
          <h4> Enter Account Details </h4>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg col-md col-sm col-xs">
              <Form vertical>
                <FormGroup >
                  <Label for="exampleEmail" className="mr-sm-2">First Name</Label>
                  <Input type="name" placeholder="John" />
                </FormGroup>
                <FormGroup >
                  <Label for="examplePassword" className="mr-sm-2">Email</Label>
                  <Input type="email" placeholder="*******@example.com" />
                </FormGroup>
              </Form>
            </div>
            <div className="col-lg col-md col-sm col-xs">
              <Form vertical>
                <FormGroup >
                  <Label for="exampleEmail" className="mr-sm-2">Surname</Label>
                  <Input type="name" placeholder="Snow" />
                </FormGroup>
                <FormGroup >
                  <Label for="examplePassword" className="mr-sm-2">Phone Number</Label>
                  <Input type="number" placeholder="Phone Number" />
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Customer;
