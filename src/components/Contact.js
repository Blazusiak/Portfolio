import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBView
} from "mdbreact";

import contact from "../assets/contact.jpg";

export class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    sent: false
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    let formValid = true;

    // Check if fields are empty
    if (
      !this.state.name ||
      !this.state.email ||
      !this.state.subject ||
      !this.state.message
    ) {
      formValid = false;
    }

    if (
      this.state.name &&
      this.state.email &&
      this.state.subject &&
      this.state.message
    ) {
      formValid = true;
      this.resetForm();
      event.target.className -= " was-validated";
    }

    const { name, email, subject, message } = this.state;
    let templateParams = {
      name: name,
      to: "jblazusi@ualberta.ca",
      email: email,
      subject: subject,
      message: message
    };
    if (formValid) {
      emailjs.send(
        "gmail",
        "example",
        templateParams,
        "user_QOKDE7xgzlZNjAYvqugow"
      );
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      sent: true
    });
  }

  render() {
    return (
      <div className="pb-5 pt-5" id="contact">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Contact Information
        </h2>
        <MDBCard className="my-5 mx-5 px-5 pb-5 pt-5">
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="4" className="md-0">
                <form
                  className="needs-validation"
                  id="contact-form"
                  onSubmit={this.submitHandler}
                  noValidate
                >
                  <MDBRow>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="text"
                          id="name"
                          label="Your name"
                          name="name"
                          value={this.state.name}
                          onChange={this.changeHandler}
                          className="form-control"
                          required
                        />
                      </div>
                    </MDBCol>
                    <MDBCol md="6">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="email"
                          id="email"
                          label="Your email"
                          name="email"
                          value={this.state.email}
                          onChange={this.changeHandler}
                          className="form-control"
                          required
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="text"
                          id="subject"
                          label="Subject"
                          name="subject"
                          value={this.state.subject}
                          onChange={this.changeHandler}
                          className="form-control"
                          required
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="12">
                      <div className="md-form mb-0">
                        <MDBInput
                          type="textarea"
                          id="message"
                          label="Your message"
                          name="message"
                          value={this.state.message}
                          onChange={this.changeHandler}
                          className="form-control"
                          required
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <div className="text-center text-md-left">
                    {this.state.sent ? (
                      <MDBBtn color="blue" type="submit" disabled>
                        Thank you for your email!
                      </MDBBtn>
                    ) : (
                      <MDBBtn color="blue" type="submit">
                        Send
                      </MDBBtn>
                    )}
                  </div>
                </form>
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
