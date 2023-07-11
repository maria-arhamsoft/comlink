import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Images } from "../../../assets/assets";
import { Link } from "react-router-dom";
import "./Header.css";
import Lottie from 'react-lottie-player'
import greenCall from "../../../assets/json-files/call-green.json";
const Header = () => {
    return (
        <div>
            <header className="site-header">
                <div className="custom-container">
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home">
                            <img src={Images.siteLogo} className="img-fluid site-main-logo" alt="img" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="pages-names">
                            <Nav className="ms-auto">
                                <Link to="/">Home</Link>
                                <Link to="/">Cabel Tv</Link>
                                <Link to="/">Internet</Link>
                                <Link to="/">Phone</Link>
                                <Link to="/">Business</Link>
                                <Link to="/">Free Tv Trial</Link>
                                <Link to="/">Free Internet</Link>
                                <Link to="/">Get A Quote</Link>
                            </Nav>
                            <div className="haeder-phone d-flex align-items-center">
                                <Lottie
                                className="call-lottie"
                                    loop
                                    animationData={greenCall}
                                    play
                                />
                                <a className="ms-3 gray-clr" href="tel: 3111687332">833 604-1080</a>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>
        </div>
    );
};
export default Header;
