import React from 'react';
import {
  Form, FormGroup, Label, Input
} from 'reactstrap';

class Schedule extends React.Component {
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
            <h4> Select Date </h4>
          </div>
          <div className="col-lg col-md col-sm col-xs">
            <FormGroup >
              <Input type="number" placeholder="12" />
              <Input type="number" className="mr-sm-2" placeholder="31" />
            </FormGroup>
          </div>

          <div>
            <h4> Enter Schedule Details </h4>
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg col-md col-sm col-xs">
                <Form vertical>
                  <FormGroup >
                    <Label for="exampleEmail" className="mr-sm-2">Time</Label>
                    <Input type="name" />
                  </FormGroup>
                  <FormGroup >
                    <Label for="examplePassword" className="mr-sm-2">City</Label>
                    <Input type="name" />
                  </FormGroup>
                </Form>
              </div>
              <div className="col-lg col-md col-sm col-xs">
                <Form vertical>
                  <FormGroup >
                    <Label for="exampleEmail" className="mr-sm-2">Address 1</Label>
                    <Input type="name" />
                  </FormGroup>
                  <FormGroup >
                    <Label for="examplePassword" className="mr-sm-2">Lga</Label>
                    <Input type="name" />
                  </FormGroup>
                </Form>
              </div>
              <div className="col-lg col-md col-sm col-xs">
                <Form vertical>
                  <FormGroup >
                    <Label for="exampleEmail" className="mr-sm-2">Address 2</Label>
                    <Input type="name" />
                  </FormGroup>
                  <FormGroup >
                    <Label for="examplePassword" className="mr-sm-2">State</Label>
                    <Input type="name" />
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

export default Schedule;
