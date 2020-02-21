import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from "mdbreact";
import { Link, animateScroll as scroll } from "react-scroll";

export class Navbar extends Component {
  state = {
    collapsed: false
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div>
        <MDBNavbar
          color="rgba-green-strong"
          dark
          expand="md"
          fixed="top"
          scrolling
        >
          <MDBContainer>
            <MDBNavbarBrand onClick={this.scrollToTop}>
              <a>
                <strong className="white-text">Jacob Blazusiak</strong>
              </a>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.handleTogglerClick} />
            <MDBCollapse isOpen={collapsed} navbar>
              <MDBNavbarNav right>
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>

                <Link
                  activeClass="active"
                  className="nav-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>

                <Link
                  activeClass="active"
                  className="nav-link"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Experience
                </Link>

                <Link
                  activeClass="active"
                  className="nav-link"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>

                <Link
                  activeClass="active"
                  className="nav-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {collapsed}
      </div>
    );
  }
}

export default Navbar;
