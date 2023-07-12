import React from 'react'
import { Images } from "../../../../assets/assets";
import { Container, Row, Col } from "react-bootstrap";
import "./Bst-Provider.css";


function BestProviders() {
    return (
        <>
            <section className='QuestionAnswer'>
                <Container fluid className="custom-container">
                    <Row>
                        <Col lg={7}>
                            <div className='lead-img-container'>
                            <img src={Images.leadprovider1} className="img-fluid site-main-logo" alt="img" />
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className='lead-provider-content'>
                                <h4>Find The Leading Providers In Your Area Within 20 Seconds.</h4>
                                <p>We’ve found the top internet, TV and streaming providers, their best offers and most popular plans just for you. When you’ve found what you need, place your order and pat yourself on the back.</p>
                                <div className='baner-btn'>
                                    <button className='btn theme-btn'>Get A Quote</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BestProviders
