import React, { Component } from "react";
import { MDBRow, MDBCol, MDBView, MDBContainer } from "mdbreact";

import header from "../assets/header.jpg";

class Header extends Component {
  render() {
    return (
      <MDBView src={header} fixed id="home">
        <MDBContainer className="d-flex justify-content-center align-items-center">
          <MDBRow>
            <MDBCol md="12" className="py-5 white-text text-center">
              <h1 className="display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold">
                Jacob Blazusiak
              </h1>
              <hr className="hr-light" />
              <h5 className="text-uppercase pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold">
                Aspiring Software Engineer
              </h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    );
  }
}

export default Header;
