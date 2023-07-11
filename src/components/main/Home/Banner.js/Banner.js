import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";

function Banner() {
    return (
        <div>
            <section className='baner-section'>
                <Container fluid className="custom-container">
                    <Row>
                        <Col>
                            <div className='baner-content'>
                                <h1 className='theme-clr'>SEARCH ENGINE</h1>
                                <h2 className='green-clr'>FOR ALL PROVIDERS</h2>
                                <p className='gray-clr'>To Help You Find The Best Deals On Internet, Tv & Phone Services.</p>
                                <div className='baner-btn'>
                                    <button className='btn theme-btn'>Get A Quote</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </div>
    )
}

export default Banner
