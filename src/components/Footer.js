import React, { Component } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBBtn,
  MDBIcon
} from "mdbreact";

export class Footer extends Component {
  render() {
    return (
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center">
          <MDBRow>
            <MDBCol>
              <MDBBtn>
                <MDBIcon fab icon="instagram" size="2x" />
              </MDBBtn>
              <MDBBtn>
                <MDBIcon fab icon="github" size="2x" />
              </MDBBtn>
              <MDBBtn>
                <MDBIcon fab icon="linkedin" size="2x" />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Jacob Blazusiak
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
