import React, { Component } from "react";
import { MDBFooter, MDBIcon } from "mdbreact";

export class Footer extends Component {
  render() {
    return (
      <MDBFooter color="rgba-green-strong" className="font-small pt-4 mt-4">
        <div className="text-center">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item mx-3 px-3">
              <a href="https://www.instagram.com/jBlazusiak/">
                <MDBIcon fab icon="instagram" size="2x" />
              </a>
            </li>
            <li className="list-inline-item mx-3 px-3">
              <a href="https://github.com/blazusiak/" id="github">
                <MDBIcon fab icon="github" size="2x" />
              </a>
            </li>
            <li className="list-inline-item mx-3 px-3">
              <a
                href="https://www.linkedin.com/in/jacob-blazusiak/"
                id="linkedin"
              >
                <MDBIcon fab icon="linkedin" size="2x" />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center pb-1">
          &copy; {new Date().getFullYear()} Jacob Blazusiak
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
