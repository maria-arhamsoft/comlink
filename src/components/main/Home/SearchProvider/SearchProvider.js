import React from 'react'
import { Images } from "../../../../assets/assets";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from 'react-lottie-player'
import comp from "../../../../assets/json-files/comp.json";
import "./SearchProvider.css";

function SearchProvider() {
    return (
        <div>
            <section className='serch-provider-section'>
                <div id='comp-lottie'>
                    <Lottie
                        loop
                        animationData={comp}
                        play
                    />
                </div>
                <Container fluid className="custom-container">
                    <Row className='d-flex flex-column justify-content-center aligh-items-center'>
                        <Col>
                            <div className='serch-provider-content d-flex flex-column justify-content-center aligh-items-center text-center'>
                                <h4 className='text-white'>Get The Best Provider In Your Area</h4>
                                <p className='gray-light'>Over 7,000,000 people use our free tool every year to search 1,600+ internet providers across the world.</p>
                                <div className='search-code'>
                                    <span className='zip-code-img'>
                                        <img src={Images.zipicon} className="img-fluid" alt="img" />
                                    </span>
                                    <input className="form-control" placeholder='Zip Code'>

                                    </input>
                                    <button className='search--provider-btn'>Search Providers</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='map-section'>
                <Container fluid className="custom-container">
                    <Row className='align-items-center'>
                        <Col lg={6} >
                            <div className='map-img-container'>
                                <img src={Images.map} className="img-fluid" alt="img" />
                            </div>
                        </Col>
                        <Col lg={6} className='d-flex justify-content-end ps-xl-5 ps-lg-3 ps-0'>
                            <div className='lead-provider-content'>
                                <h4 className='theme-clr '>We've Got You Covered With All The Providers Available At Your Address!</h4>
                                <p>Searching for Phone,TV & Internet providers might get hectic for you. It takes a lot of time and energy as you have to do plenty of research. However, Cable bundle has done the research to help you find the best deals in your area. Meanwhile, you have to give us a call to acquire all information regarding these particular services.</p>
                                <div className='baner-btn'>
                                    <button className='btn theme-btn'>More Info</button>
                                    <button className='btn green-borderd-btn ms-3'>Get A Quote</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default SearchProvider
