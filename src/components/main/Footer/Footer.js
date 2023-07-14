import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Images } from "../../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <Container fluid className="custom-container">
                    <div className="top-footer">
                        <Row className="get-started">
                            <div className="col-lg-8">
                                <div className="get-start-content">
                                    <h5>Get Started with Comlink</h5>
                                    <p>Comlinkbundle can help you find the best-bundled deal for your TV, Internet, and Phone services to save your time and money.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-3">
                                    <button className="btn theme-btn">Get Started</button>
                                </div>
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
                                    <div className="contact-list">
                                        <div className="footer-links">
                                            <ul className="list-unstyled contact-info flex-column">
                                                <li>
                                                    <a href="#">
                                                        <span className="me-2"><FontAwesomeIcon icon={faPhone} /></span>
                                                        <span>833 604-1080</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="me-2">
                                                            <FontAwesomeIcon icon={faEnvelope} />
                                                        </span>
                                                        <span className="opacity-1">info@comlinkbundle.com</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="me-2">
                                                            <FontAwesomeIcon icon={faLocationDot} />
                                                        </span>
                                                        <span>
                                                            2891 Center Point Fort Myers, Florida 33916
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
                                    <h5>Newsletter</h5>
                                    <div className="field-wrapper">
                                        <input
                                            className="form-control"
                                            name="email"
                                            type="text"
                                            placeholder="Email address"
                                        />
                                        <button className="btn green-btn">
                                            <img src={Images.Link} className="img-fluid" alt="img" />
                                        </button>
                                    </div>
                                    <div className="follow-us">
                                        <ul class="list-unstyled">
                                            <li>
                                                <a href="#" className="facebook">
                                                    <span><FontAwesomeIcon icon={faFacebookF} /></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="linkedin">
                                                    <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="twitter">
                                                    <span><FontAwesomeIcon icon={faTwitter} /></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="pinterest">
                                                    <span><FontAwesomeIcon icon={faPinterest} /></span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="youtube">
                                                    <span><FontAwesomeIcon icon={faYoutube} /></span>

                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="bottom-footer">
                        <div className="copyrights">
                            <p className="p-text-20">
                                Copyright Reserved by www.comlinkai.com
                            </p>
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    );
};
export default Footer;

