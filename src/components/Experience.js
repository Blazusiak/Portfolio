import React, { Component } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn
} from 'mdbreact';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

import { ReactComponent as Angularjs } from '../assets/angularjs.svg';
import { ReactComponent as C } from '../assets/c.svg';
import { ReactComponent as Cplusplus } from '../assets/cplusplus.svg';
import { ReactComponent as Django } from '../assets/django.svg';
import { ReactComponent as Javascript } from '../assets/javascript.svg';
import { ReactComponent as Mongodb } from '../assets/mongodb.svg';
import { ReactComponent as Nodejs } from '../assets/nodejs.svg';
import { ReactComponent as Postgresql } from '../assets/postgresql.svg';
import { ReactComponent as Python } from '../assets/python.svg';
import { ReactComponent as Reactjs } from '../assets/reactjs.svg';
import { ReactComponent as Sqlite } from '../assets/sqlite.svg';

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
                <Timeline lineColor={'#ddd'}>
                  <TimelineItem
                    key="001"
                    dateText="May 2018 – August 2019"
                    dateInnerStyle={{ background: '#007C41' }}
                    bodyContainerStyle={{
                      padding: '20px',
                      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <h3>University of Alberta</h3>
                    <h4>Junior Research Analyst</h4>
                    <ul>
                      <li>
                        Collaborated in an interdisciplinary project researching
                        plant growth with image analysis
                      </li>
                      <li>
                        Provided desktop support for hundreds of researchers
                        around campus
                      </li>
                      <li>
                        Researched new technologies and IT solutions for the
                        University
                      </li>
                      <li>Designed custom 3D prints for researcher projects</li>
                      <li>Documented and tracked issues using ServiceNow</li>
                    </ul>
                  </TimelineItem>
                  <TimelineItem
                    key="002"
                    dateText="May 2017 – Dec 2017"
                    dateInnerStyle={{ background: '#0099CC' }}
                    bodyContainerStyle={{
                      padding: '20px',
                      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <h3>StatGo</h3>
                    <h4>Web Developer</h4>
                    <ul>
                      <li>
                        Refactored the web application to use Material Design
                        and AngularJS
                      </li>
                      <li>
                        Designed numerous intuitive help webpages and tools for
                        new application users
                      </li>
                      <li>
                        Facilitated software consultations to find and tailor
                        solutions for client needs
                      </li>
                      <li>
                        Prepared documentation and tracking for issues based on
                        priority and impact
                      </li>
                      <li>
                        Embraced agile software development skills and practices
                      </li>
                    </ul>
                  </TimelineItem>
                </Timeline>
              </MDBCol>
              <MDBCol md="5">
                <h3 className="font-weight-bold text-center mb-3 p-0">
                  <strong>Skills</strong>
                </h3>
                <MDBRow className="text-center">
                  <MDBCol md="6" className="text-center">
                    <Angularjs className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                  <MDBCol md="6" className="text-center">
                    <Reactjs className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="text-center">
                  <MDBCol md="6" className="text-center">
                    <Django className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                  <MDBCol md="6" className="text-center">
                    <Nodejs className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                </MDBRow>

                <MDBRow className="text-center">
                  <MDBCol md="6" className="text-center">
                    <C className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                  <MDBCol md="6" className="text-center">
                    <Cplusplus className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="text-center">
                  <MDBCol md="6" className="text-center">
                    <Python className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                  <MDBCol md="6" className="text-center">
                    <Javascript className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                </MDBRow>

                <MDBRow className="text-center">
                  <MDBCol md="4" className="text-center">
                    <Mongodb className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                  <MDBCol md="4" className="text-center">
                    <Sqlite className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                  <MDBCol md="4" className="text-center">
                    <Postgresql className="rounded mx-auto w-50 h-50" />
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default Experience;
