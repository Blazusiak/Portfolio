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
                  I am currently in my final year in Specialization of Computer
                  Science at University of Alberta. During my time at the
                  university I have had the opporutunity to work on all kinds of
                  projects ranging from fields in medicine to visual recognition
                  to video games. It has been a blast and I wouldn't change it
                  for anything else. I love how computing science can be applied
                  to every field, and I love learning about other fields in the
                  process of helping others. I was able to do this on a few
                  occasions such as when my group and I worked on a project for
                  a doctor to track important information during a resuscitation
                  simulation. As well as working with biologists on a project to
                  utilize visual recognition to apply to plant phenotyping. I
                  have a passion for making people's lives easier with
                  technology. Aside from programming, I have a passion for
                  cinema, photography and cooking.
                </p>
                <MDBBtn>
                  <MDBIcon far icon="file" className="pr-3" />
                  Resume
                </MDBBtn>
                <MDBBtn href="mailto:jblazusi@ualberta.ca">
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
