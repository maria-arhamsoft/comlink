import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Images } from "../../../assets/assets";
import "./Header.css";
import Lottie from 'react-lottie-player'
import greenCall from "../../../assets/json-files/call-green.json";
import { Container } from "react-bootstrap";

const Header = () => {
  const location = useLocation();

  return (
    <div>
      <header className="site-header">
        <Container className="custom-container">
          <Navbar expand="lg">
            <Link to="/">
              <img
                src={Images.siteLogo}
                className="img-fluid site-main-logo"
                alt="img"
              />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="pages-names">
              <Nav className="ms-auto">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
                <Link to="/cabletv" className={location.pathname === "/cabletv" ? "active" : ""}>Cable TV</Link>
                <Link to="/internet" className={location.pathname === "/internet" ? "active" : ""}>Internet</Link>
                <Link to="/phone" className={location.pathname === "/phone" ? "active" : ""}>Phone</Link>
                <Link to="/business" className={location.pathname === "/business" ? "active" : ""}>Business</Link>
                <Link to="/freetrial" className={location.pathname === "/freetrial" ? "active" : ""}>Free TV Trial</Link>
                <Link to="/freeinternet" className={location.pathname === "/freeinternet" ? "active" : ""}>Free Internet</Link>
                <Link to="/getaqoute" className={location.pathname === "/getaqoute" ? "active" : ""}>Get A Quote</Link>
              </Nav>
              <div className="haeder-phone d-flex align-items-center">
                <a
                  className="d-flex align-items-center ms-xl-3 ms-lg-2 ms-1 gray-clr"
                  href="tel: 3111687332"
                >
                  <Lottie
                    className="call-lottie"
                    loop
                    animationData={greenCall}
                    play
                  />
                  833 604-1080
                </a>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </div>
  );
};

export default Header;
