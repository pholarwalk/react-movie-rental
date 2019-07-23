import React from 'react';

class Payment2 extends React.Component {
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
        <div className="col-lg col-md col-sm col-xs">

          <img src={require("../../images/halotrak-icon.svg")} width="100" alt="individual" />
        </div>
        <h3> Your request </h3>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-md col-sm col-xs">
            <h4> Summary </h4>
            <p> Your Request </p>
            <p> Your Request </p>
            <p> Your Request </p>
          </div>
          <div className="col-lg-6 col-md col-sm col-xs">
            <h4> Amount </h4>
            <p> Your Request </p>
            <p> Your Request </p>
            <p> Your Request </p>
          </div>
        </div>
      </div>

    );
  }
}

export default Payment2;

