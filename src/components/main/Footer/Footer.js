import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Images } from "../../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="custom-container">
                    <div className="top-footer">
                        <Row className="get-started">
                            <div className="col-lg-10">
                                <div className="get-start-content">
                                    <h5>Get Started with Comlink</h5>
                                    <p>Comlinkbundle can help you find the best-bundled deal for your TV, Internet, and Phone services to save your time and money.</p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <button className="theme-btn">Get Started</button>
                            </div>
                        </Row>
                        <Row className="footer-content-row">
                            <Col lg={3}>
                                <div className="footer-logo">
                                    <img src={Images.footerLogo} className="img-fluid" alt="img" />
                                </div>
                                <div className="footer-content">
                                    Comlinkbundle aims to provide all necessities of your house in one place for a single price. We can help you find the best-bundled deal for your TV, Internet, and Phone services to save your time and money.
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className="footer-links">
                                    <h5>Menu</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Cable Tv</a>
                                        </li>
                                        <li>
                                            <a href="#">Internet </a>
                                        </li>
                                        <li>
                                            <a href="#">Phone</a>
                                        </li>
                                        <li>
                                            <a href="#">Business</a>
                                        </li>
                                        <li>
                                            <a href="#">Free Tv Trial</a>
                                        </li>
                                        <li>
                                            <a href="#">Free Internet</a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className="footer-links">
                                    <h5 className="">Quick Links</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms & Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className="footer-links">
                                    <h5 className="">Contact Us</h5>
                                    <div className="contact-list padding-100">
                                        <div className="footer-links">
                                            <ul className="list-unstyled contact-info flex-column">
                                                <li>
                                                    <a href="#">
                                                        <span className="opacity-1">info@comlinked.com</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span>+1-833-526-0200</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span>
                                                            2891 Center Point Drive, Fort Myers, FL 33916
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="footer-newsletter">
                                    <h5>Never Miss An Updates.</h5>
                                    <p className="p-text-24 light-gray_clr">
                                        Be the first to hear about new offers and updates from
                                        comlinked
                                    </p>
                                    <div className="field-wrapper">
                                        <input
                                            className="form-control"
                                            name="email"
                                            type="text"
                                            placeholder="Email address"
                                        />
                                        <button className="white-hover-bg theme-btn">
                                            {/* <img src={Images.link} className="img-fluid" alt="img" /> */}
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="bottom-footer">
                        <div className="copyrights">
                            <p className="p-text-20 light-gray_clr">
                                Copyright © 2023 Comlinked. Internet. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;

