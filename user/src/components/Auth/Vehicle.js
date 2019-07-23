import React from 'react';

import {
  Form, FormGroup, Label, Input
} from 'reactstrap';

class Vehicle extends React.Component {
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
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg col-md col-sm col-xs">
            <h4> Number of Vehicles </h4>
          </div>
          <div className="col-lg col-md col-sm col-xs">
            <FormGroup >
              <Input type="number" className="mr-sm-2" placeholder="1" />
            </FormGroup>
          </div>


          <div>
            <h4> Enter Vehicle Details </h4>
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg col-md col-sm col-xs">
                <Form vertical>
                  <FormGroup >
                    <Label for="exampleEmail" className="mr-sm-2">Make</Label>
                    <Input type="name" />
                  </FormGroup>
                  <FormGroup >
                    <Label for="examplePassword" className="mr-sm-2">Year</Label>
                    <Input type="email" />
                  </FormGroup>
                </Form>
              </div>
              <div className="col-lg col-md col-sm col-xs">
                <Form vertical>
                  <FormGroup >
                    <Label for="exampleEmail" className="mr-sm-2">Model</Label>
                    <Input type="name" />
                  </FormGroup>
                  <FormGroup >
                    <Label for="examplePassword" className="mr-sm-2">License no.</Label>
                    <Input type="number" />
                  </FormGroup>
                </Form>
              </div>
              <div className="col-lg col-md col-sm col-xs">
                <Form vertical>
                  <FormGroup >
                    <Label for="exampleEmail" className="mr-sm-2">Color</Label>
                    <Input type="name" />
                  </FormGroup>
                  <FormGroup >
                    <Label for="examplePassword" className="mr-sm-2">Reg no.</Label>
                    <Input type="number" />
                  </FormGroup>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vehicle;
