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

import about from "../assets/about.jpg";

export class About extends Component {
  render() {
    return (
      <div id="about">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          About
        </h2>
        <MDBCard className="my-5 mx-5 px-5 pb-5 pt-5">
          <MDBCardBody>
            <MDBRow>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img className="img-fluid" src={about} alt="" />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Welcome!</strong>
                </h3>
                <p>
                  My name is Jacob, and I am currently in my final year of
                  Computing Science at University of Alberta. During my time at
                  the university I have had the opportunity to work on all kinds
                  of projects ranging in fields as broad as medicine to video
                  games. It has been a blast and I wouldn't change it for
                  anything else.
                </p>
                <p>
                  I love how computing science can be applied to every field,
                  and how it gives me exposure to different areas of study.
                  Seeing the joy on faces, when a tedious task can be automized
                  or made simpler is an absolute pleasure. I was able to do this
                  on a few occasions such as when I worked on a project for a
                  doctor to assist in tracking important information during
                  resuscitation simulations. As well as working with biologists
                  at the University of Alberta, to use visual recognition in
                  their plant phenotyping research.
                </p>
                <p>
                  Aside from programming, I have a passion for cinema,
                  photography and cooking.
                </p>
                <MDBBtn
                  color="blue"
                  href="https://github.com/Blazusiak/portfolio/raw/master/src/assets/JacobBlazusiak.pdf"
                  download
                >
                  <MDBIcon icon="file-download" className="pr-3" />
                  Resume
                </MDBBtn>
                <MDBBtn color="blue" href="mailto:jblazusi@ualberta.ca">
                  <MDBIcon icon="envelope" className="pr-3" />
                  Contact
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default About;
