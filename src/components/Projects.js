import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBView, MDBMask } from "mdbreact";

import Haptik from "../assets/haptik.png";
import NewPee from "../assets/newpee.png";
import Phenotyping from "../assets/phenotyping.jpg";

export class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Projects
        </h2>
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
              <img src={Phenotyping} alt="" className="img-fluid" />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">
                Raspberry Pi Plant Phenotyping
              </h4>
              <p className="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Projects;
