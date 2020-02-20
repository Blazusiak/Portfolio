import React, { Component } from "react";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
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

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div>
        <MDBNavbar color="primary-color" dark expand="md" fixed="top" scrolling>
          <MDBContainer>
            <MDBNavbarBrand onClick={this.scrollToTop}>
              <a>
                <strong className="white-text">Jacob Blazusiak</strong>
              </a>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.handleTogglerClick} />
            <MDBCollapse isOpen={collapsed} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavbarBrand onClick={this.scrollToTop}>
                    <a>Home</a>
                  </MDBNavbarBrand>
                </MDBNavItem>
                <MDBNavbarBrand>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                </MDBNavbarBrand>
                <MDBNavItem>
                  <MDBNavbarBrand>
                    <Link
                      activeClass="active"
                      to="experience"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Experience
                    </Link>
                  </MDBNavbarBrand>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavbarBrand>
                    <Link
                      activeClass="active"
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Projects
                    </Link>
                  </MDBNavbarBrand>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavbarBrand>
                    <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </MDBNavbarBrand>
                </MDBNavItem>
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
