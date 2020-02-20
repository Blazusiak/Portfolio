import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

export class Footer extends Component {
  render() {
    return (
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center">
          <MDBRow>
            <MDBCol>
              <a href="https://www.instagram.com/jBlazusiak/">
                <MDBIcon fab icon="instagram" size="2x" />
              </a>
            </MDBCol>
            <MDBCol>
              <a href="https://github.com/blazusiak/">
                <MDBIcon fab icon="github" size="2x" />
              </a>
            </MDBCol>
            <MDBCol>
              <a href="https://www.linkedin.com/in/jacob-blazusiak/">
                <MDBIcon fab icon="linkedin" size="2x" />
              </a>
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
