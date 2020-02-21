import React, { Component } from "react";
import { MDBFooter } from "mdbreact";

export class Footer extends Component {
  render() {
    return (
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <div className="text-center">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item mx-3 px-3">
              <a href="https://www.instagram.com/jBlazusiak/">
                <span class="fa-stack fa-2x">
                  <i class="fa fa-circle fa-stack-2x icon-background"></i>
                  <i class="fab fa-instagram fa-stack-1x"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item mx-3 px-3">
              <a href="https://github.com/blazusiak/" id="github">
                <span class="fa-stack fa-2x">
                  <i class="fa fa-circle fa-stack-2x icon-background"></i>
                  <i class="fab fa-github fa-stack-1x"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item mx-3 px-3">
              <a
                href="https://www.linkedin.com/in/jacob-blazusiak/"
                id="linkedin"
              >
                <span class="fa-stack fa-2x">
                  <i class="fa fa-circle fa-stack-2x icon-background"></i>
                  <i class="fab fa-linkedin fa-stack-1x"></i>
                </span>
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
