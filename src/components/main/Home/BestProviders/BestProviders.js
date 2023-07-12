import React from 'react'
import { Images } from "../../../../assets/assets";
import { Container, Row, Col } from "react-bootstrap";
import "./Bst-Provider.css";


function BestProviders() {
    return (
        <>
            <section className='lead-providers'>
                <Container fluid className="custom-container">
                    <Row className='align-items-center padding-bottom'>
                        <Col lg={7}>
                            <div className='lead-img-container'>
                                <img src={Images.leadprovider1} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className='lead-provider-content'>
                                <h4 className='theme-clr '>Find The Leading Providers In Your Area Within 20 Seconds.</h4>
                                <p>We’ve found the top internet, TV and streaming providers, their best offers and most popular plans just for you. When you’ve found what you need, place your order and pat yourself on the back.</p>
                                <div className='baner-btn'>
                                    <button className='btn theme-btn'>Get A Quote</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='align-items-center padding-bottom'>
                        <Col lg={5}>
                            <div className='lead-provider-content'>
                                <h4 className='theme-clr '>Comlink Bundle Provide Best Deal On Internet Services</h4>
                                <p>Searching for an internet or TV provider can be hectic. Contact Us, and we will guide you about the best feasible options according to your zip code.</p>
                                <div className='baner-btn'>
                                    <button className='btn theme-btn'>Get A Quote</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className='lead-img-container'>
                                <img src={Images.videoposter} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                    </Row>
                    <Row className='align-items-center padding-bottom'>
                        <Col lg={7}>
                            <div className='lead-img-container'>
                                <img src={Images.leadprovider2} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className='lead-provider-content'>
                                <h4 className='theme-clr '>High-Speed Internet Is Just A Call Away</h4>
                                <p>Finding an Internet service provider can be lengthy and complicated. As it requires a lot of research and raises many questions. Hence, we are here to answer all of your queries regarding internet providers in your area. Our representatives can assist you regarding these kinds of services. Therefore, you can call us to obtain all the information regarding Internet providers in your area.</p>
                                <div className='baner-btn'>
                                    <button className='btn theme-btn'>Call To Order</button>
                                    <button className='btn green-borderd-btn ms-4'>Check Provider List</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='align-items-center padding-bottom'>
                        <Col lg={5}>
                            <div className='lead-provider-content'>
                                <h4 className='theme-clr '>Comlink Bundle Provide Best Deal On Internet Services</h4>
                                <p>Searching for an internet or TV provider can be hectic. Contact Us, and we will guide you about the best feasible options according to your zip code.</p>
                                <div className='baner-btn'>
                                    <button className='btn theme-btn'>Get A Quote</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className='lead-img-container'>
                                <img src={Images.leadprovider3} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BestProviders
