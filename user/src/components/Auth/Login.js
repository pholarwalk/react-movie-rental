import React from 'react';

// config

// components
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import Register from "../Auth/Register.js";


// images

// styles

class Login extends React.Component {
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
        <Button outline color="secondary " onClick={this.toggle}>{this.props.buttonLabel} Log In </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
          <ModalHeader toggle={this.toggle} >


            <div>
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-6 col-md col-sm col-xs">
                  <img src={require("../../images/login-icon.svg")} width="40" className="" alt="login icon" />
                </div>
                <div className="col-lg-6 col-md col-sm col-xs">
                  <h4>Log In</h4>
                </div>
              </div>

            </div>


          </ModalHeader>
          <ModalBody className="modal-all">
            <Form vertical>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="abcdefghij@example.com" />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="**********" />
              </FormGroup>
              <Button>Log In</Button>
            </Form>
          </ModalBody>
          <ModalFooter className="footer-all">
            <p>New to HaloTrak?  to create an account <Register /> </p>


          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Login;
