import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask
} from "mdbreact";

import Haptik from "../assets/Haptik.png";
import NewPee from "../assets/NewPee.png";

export class Projects extends Component {
  render() {
    return (
      <div>
        {" "}
        <section className="text-center my-5 mx-5">
          <h2 className="h1-responsive font-weight-bold my-5">Projects</h2>

          <MDBRow className="text-center mx-5">
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <img src={Haptik} alt="" className="img-fluid" />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Haptik</h4>
                <p className="grey-text">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae.
                </p>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <img src={NewPee} alt="" className="img-fluid" />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <h4 className="font-weight-bold my-3">NewPee</h4>
                <p className="grey-text">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae.
                </p>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <img src="" alt="" className="img-fluid" />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Plant Phenotyping</h4>
                <p className="grey-text">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae.
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </section>
      </div>
    );
  }
}

export default Projects;
