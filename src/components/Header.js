import React, { Component } from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer
} from "mdbreact";

import header from "../assets/header.JPG";
import about from "../assets/about.jpg";

class Header extends Component {
  render() {
    return (
      <MDBView src={about} fixed>
        {/* <MDBMask className="rgba-white-light" /> */}
        <MDBContainer className="d-flex justify-content-center align-items-center">
          <MDBRow>
            <MDBCol md="12" className="py-5 white-text text-center">
              <h1 className="display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold">
                Jacob{" "}
                <span className="indigo-text font-weight-bold">Blazusiak</span>
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
