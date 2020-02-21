import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBView,
  MDBMask
} from "mdbreact";

import contact from "../assets/contact.jpg";

export class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Contact Information
        </h2>
        <MDBCard className="my-5 mx-5 px-5 pb-5 pt-5">
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="4" className="md-0">
                <form>
                  <MDBRow>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="text"
                          id="contact-name"
                          label="Your name"
                        />
                      </div>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="text"
                          id="contact-email"
                          label="Your email"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="text"
                          id="contact-subject"
                          label="Subject"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="textarea"
                          id="contact-message"
                          label="Your message"
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </form>
                <div className="text-center text-md-left">
                  <MDBBtn color="primary" size="md">
                    Send
                  </MDBBtn>
                </div>
              </MDBCol>

              <MDBCol md="3" className="text-center md-0 mb-5">
                <ul className="list-unstyled mt-5">
                  <li>
                    <MDBIcon
                      icon="map-marker-alt"
                      size="2x"
                      className="blue-text"
                    />
                    <p>Edmonton, AB</p>
                  </li>
                  <li>
                    <MDBIcon
                      icon="phone"
                      size="2x"
                      className="blue-text mt-4"
                    />
                    <p>+ 01 780 717-3455</p>
                  </li>
                  <li>
                    <MDBIcon
                      icon="envelope"
                      size="2x"
                      className="blue-text mt-4"
                    />
                    <p>jblazusi@ualberta.ca</p>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="5" className="text-center">
                <MDBView className="rounded z-depth-2 mb-lg-0" hover waves>
                  <img className="img-fluid" src={contact} alt="drumheller" />
                </MDBView>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default Contact;
