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
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

import { ReactComponent as Angularjs } from "../assets/angularjs.svg";
import { ReactComponent as C } from "../assets/c.svg";
import { ReactComponent as Cplusplus } from "../assets/cplusplus.svg";
import { ReactComponent as Django } from "../assets/django.svg";
import { ReactComponent as Javascript } from "../assets/javascript.svg";
import { ReactComponent as Mongodb } from "../assets/mongodb.svg";
import { ReactComponent as Nodejs } from "../assets/nodejs.svg";
import { ReactComponent as Postgresql } from "../assets/postgresql.svg";
import { ReactComponent as Python } from "../assets/python.svg";
import { ReactComponent as Reactjs } from "../assets/reactjs.svg";
import { ReactComponent as Sqlite } from "../assets/sqlite.svg";

export class Experience extends Component {
  render() {
    return (
      <>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Experience
        </h2>
        <MDBCard className="my-5 mx-5 px-5 pb-5 pt-5">
          <MDBCardBody>
            <MDBRow>
              <MDBCol lg="7">
                <Timeline lineColor={"#ddd"}>
                  <TimelineItem
                    key="001"
                    dateText="May 2018 – August 2019"
                    bodyContainerStyle={{
                      padding: "20px",
                      boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                    }}
                  >
                    <h3>University of Alberta</h3>
                    <h4>Junior Research Analyst</h4>
                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                  </TimelineItem>
                  <TimelineItem
                    key="002"
                    dateText="May 2017 – Dec 2017"
                    bodyContainerStyle={{
                      padding: "20px",
                      boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                    }}
                  >
                    <h3>StatGo</h3>
                    <h4>Web Developer</h4>
                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                    <p>
                      Est incididunt sint eu minim dolore mollit velit velit
                      commodo ex nulla exercitation. Veniam velit adipisicing
                      anim excepteur nostrud magna nostrud aliqua dolor. Sunt
                      aute est duis ut nulla officia irure reprehenderit laborum
                      fugiat dolore in elit. Adipisicing do qui duis Lorem est.
                    </p>
                  </TimelineItem>
                </Timeline>
                {/* <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img className="img-fluid" src="" alt="" />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView> */}
              </MDBCol>
              <MDBCol lg="5">
                <h3 className="font-weight-bold text-center mb-3 p-0">
                  <strong>Skills</strong>
                </h3>
                <MDBRow className="text-center">
                  <MDBCol lg="3" className="text-center">
                    <Angularjs className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                  <MDBCol lg="3" className="text-center">
                    <Reactjs className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                  <MDBCol lg="3" className="text-center">
                    <Django className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                  <MDBCol lg="3" className="text-center">
                    <Nodejs className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                </MDBRow>

                <MDBRow className="text-center">
                  <MDBCol lg="3" className="text-center">
                    <C className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                  <MDBCol lg="3" className="text-center">
                    <Cplusplus className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                  <MDBCol lg="3" className="text-center">
                    <Python className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                  <MDBCol lg="3" className="text-center">
                    <Javascript className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                </MDBRow>

                <MDBRow className="text-center">
                  <MDBCol lg="4" className="text-center">
                    <Mongodb className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                  <MDBCol lg="4" className="text-center">
                    <Sqlite className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                  <MDBCol lg="4" className="text-center">
                    <Postgresql className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </>
    );
  }
}

export default Experience;
