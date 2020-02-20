import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn
} from "mdbreact";

import { ReactComponent as C } from "../assets/c.svg";
import { ReactComponent as Django } from "../assets/django.svg";
import { ReactComponent as Javascript } from "../assets/javascript.svg";
import { ReactComponent as Mongodb } from "../assets/mongodb.svg";
import { ReactComponent as Nodejs } from "../assets/nodejs.svg";
import { ReactComponent as Python } from "../assets/python.svg";
import { ReactComponent as Reactjs } from "../assets/reactjs.svg";

export class Experience extends Component {
  render() {
    return (
      <MDBCard className="my-5 mx-5 px-5 pb-5 pt-5">
        <MDBCardBody>
          <MDBRow>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img className="img-fluid" src="" alt="" />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Technologies</strong>
              </h3>
              <C className="rounded mx-auto w-25 h-25" />
              <Django className="rounded mx-auto w-25 h-25" />
              <Javascript className="rounded mx-auto w-25 h-25" />
              <Mongodb className="rounded mx-auto w-25 h-25" />
              <Nodejs className="rounded mx-auto w-25 h-25" />
              <Python className="rounded mx-auto w-25 h-25" />
              <Reactjs className="rounded mx-auto w-25 h-25" />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default Experience;
