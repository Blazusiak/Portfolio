import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCardBody, MDBView, MDBMask } from 'mdbreact';

import Haptik from '../assets/haptik.png';
import NewPee from '../assets/newpee.png';
import Phenotyping from '../assets/phenotyping.jpg';

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
                Web application used to document essential moments during
                resuscitation simulations. Adopted design techniques to simplify
                an otherwise stressful and overwhelming task.
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
                A distributed social network web application built using Django.
                Utilized continuous integration and API integration.
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
                A joint project between the University of Alberta and G2V
                Optics, analyzing the growth of plants based on various light
                conditions using visual recognition. Responsibilities included
                creating a custom physical environment to mount the Raspberry
                Pi’s and designing a robust system to sync data across multiple
                chambers to a central server. Data primarily consisted of
                images, which would eventually be piped through PlantCV for
                image analysis.
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Projects;
