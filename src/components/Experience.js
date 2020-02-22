import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle } from "mdbreact";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

import { ReactComponent as Angularjs } from "../assets/angularjs.svg";
import { ReactComponent as Bootstrap } from "../assets/bootstrap.svg";
import { ReactComponent as Cplusplus } from "../assets/cplusplus.svg";
import { ReactComponent as Digitalocean } from "../assets/digitalocean.svg";
import { ReactComponent as Django } from "../assets/django.svg";
import { ReactComponent as Docker } from "../assets/docker.svg";
import { ReactComponent as Java } from "../assets/java.svg";
import { ReactComponent as Javascript } from "../assets/javascript.svg";
import { ReactComponent as Jquery } from "../assets/jquery.svg";
import { ReactComponent as Mongodb } from "../assets/mongodb.svg";
import { ReactComponent as Nginx } from "../assets/nginx.svg";
import { ReactComponent as Nodejs } from "../assets/nodejs.svg";
import { ReactComponent as Postgresql } from "../assets/postgresql.svg";
import { ReactComponent as Python } from "../assets/python.svg";
import { ReactComponent as Reactjs } from "../assets/reactjs.svg";
import { ReactComponent as Travisci } from "../assets/travisci.svg";

export class Experience extends Component {
  render() {
    return (
      <div id="experience">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Experience
        </h2>
        <MDBCard className="my-5 mx-5 px-5 pb-5 pt-5">
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="7">
                <Timeline lineColor={"#ddd"}>
                  <TimelineItem
                    key="001"
                    dateText="May 2018 – Aug 2019"
                    dateInnerStyle={{ background: "#007C41" }}
                  >
                    <MDBCard className="px-5 pb-5 pt-5">
                      <MDBCardTitle>
                        UofA - <cite>Research Analyst</cite>
                      </MDBCardTitle>

                      <ul className="pt-2">
                        <li>
                          Collaborated in an interdisciplinary project
                          researching plant growth with image analysis
                        </li>
                        <li>
                          Provided desktop support for hundreds of researchers
                          around campus
                        </li>
                        <li>
                          Researched new technologies and IT solutions for the
                          University
                        </li>
                        <li>Designed custom 3D prints for research projects</li>
                        <li>Documented and tracked issues using ServiceNow</li>
                      </ul>
                    </MDBCard>
                  </TimelineItem>
                  <TimelineItem
                    key="002"
                    dateText="May 2017 – Dec 2017"
                    dateInnerStyle={{ background: "#0099CC" }}
                  >
                    <MDBCard className="px-5 pb-5 pt-5">
                      <MDBCardTitle>
                        StatGo - <cite>Web Developer</cite>
                      </MDBCardTitle>
                      <ul className="pt-2">
                        <li>
                          Refactored the web application to use Material Design
                          and AngularJS
                        </li>
                        <li>
                          Designed numerous intuitive help webpages and tools
                          for new application users
                        </li>
                        <li>
                          Facilitated software consultations to find and tailor
                          solutions for client needs
                        </li>
                        <li>
                          Prepared documentation and tracking for issues based
                          on priority and impact
                        </li>
                        <li>
                          Embraced agile software development skills and
                          practices
                        </li>
                      </ul>
                    </MDBCard>
                  </TimelineItem>
                </Timeline>
              </MDBCol>
              <MDBCol md="5">
                <MDBCard className="my-5 mx-5 px-5 pb-5 pt-5">
                  <MDBCardTitle className="text-center">
                    Programming Languages
                  </MDBCardTitle>
                  <MDBRow className="text-center">
                    <MDBCol>
                      <Cplusplus
                        fill="#00599C"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                    <MDBCol>
                      <Java
                        fill="#007396"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                    <MDBCol>
                      <Javascript
                        fill="#F7DF1E"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                    <MDBCol>
                      <Python
                        fill="#3776AB"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBCardTitle className="text-center">
                    Front-end Development
                  </MDBCardTitle>
                  <MDBRow className="text-center">
                    <MDBCol>
                      <Angularjs
                        fill="#DD0031"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                    <MDBCol>
                      <Bootstrap
                        fill="#563D7C"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                    <MDBCol>
                      <Reactjs
                        fill="#61DAFB"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                    <MDBCol>
                      <Jquery
                        fill="#0769AD"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBCardTitle className="text-center">
                    Back-end Development
                  </MDBCardTitle>
                  <MDBRow className="text-center">
                    <MDBCol>
                      <Django
                        fill="#092E20"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                    <MDBCol>
                      <Nodejs
                        fill="#339933"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                    <MDBCol>
                      <Mongodb
                        fill="#47A248"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                    <MDBCol>
                      <Postgresql
                        fill="#336791"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBCardTitle className="text-center">
                    Development Operations
                  </MDBCardTitle>
                  <MDBRow className="text-center">
                    <MDBCol>
                      <Digitalocean
                        fill="#0080FF"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                    <MDBCol>
                      <Docker
                        fill="#2496ED"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                    <MDBCol>
                      <Nginx
                        fill="#269539"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                    <MDBCol>
                      <Travisci
                        fill="#3EAAAF"
                        className="rounded mx-auto pt-2 w-75 h-75"
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default Experience;
