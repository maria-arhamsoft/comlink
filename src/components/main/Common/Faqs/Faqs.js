import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Lottie from 'react-lottie-player'
import faq from "../../../../assets/json-files/faq.json";
import "./faqs.css";

function Faqs() {
    return (
        <div>
            <section className='faqs-section'>
                <Container fluid className="custom-container">
                    <Row className='align-items-center'>
                        <Col lg={7} className='order-lg-1 order-2'>
                            <div className='faqs-content'>
                                <h3 className='theme-clr'>Frequently Asked Questions</h3>
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What is staff augmentation and how can it benefit my business?</Accordion.Header>
                                        <Accordion.Body>
                                            Staff augmentation is a great way for businesses to increase the efficiency of their operations by utilizing the skills and expertise of external professionals. It allows companies to fill in gaps in their workforce, add specialized skillsets, or scale up quickly when needed. By leveraging staff augmentation, companies can reduce costs and increase productivity while still maintaining quality standards.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What services do companies provide?</Accordion.Header>
                                        <Accordion.Body>
                                            Staff augmentation is a great way for businesses to increase the efficiency of their operations by utilizing the skills and expertise of external professionals. It allows companies to fill in gaps in their workforce, add specialized skillsets, or scale up quickly when needed. By leveraging staff augmentation, companies can reduce costs and increase productivity while still maintaining quality standards.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How can services help my business save money?</Accordion.Header>
                                        <Accordion.Body>
                                            Staff augmentation is a great way for businesses to increase the efficiency of their operations by utilizing the skills and expertise of external professionals. It allows companies to fill in gaps in their workforce, add specialized skillsets, or scale up quickly when needed. By leveraging staff augmentation, companies can reduce costs and increase productivity while still maintaining quality standards.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>How do I decide between a traditional system and an company?</Accordion.Header>
                                        <Accordion.Body>
                                            Staff augmentation is a great way for businesses to increase the efficiency of their operations by utilizing the skills and expertise of external professionals. It allows companies to fill in gaps in their workforce, add specialized skillsets, or scale up quickly when needed. By leveraging staff augmentation, companies can reduce costs and increase productivity while still maintaining quality standards.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>How do I decide between a traditional system and an company?</Accordion.Header>
                                        <Accordion.Body>
                                            Staff augmentation is a great way for businesses to increase the efficiency of their operations by utilizing the skills and expertise of external professionals. It allows companies to fill in gaps in their workforce, add specialized skillsets, or scale up quickly when needed. By leveraging staff augmentation, companies can reduce costs and increase productivity while still maintaining quality standards.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                  
                                </Accordion>
                                
                            </div>
                        </Col>
                        <Col lg={5} className='d-flex justify-content-end ps-xl-5 ps-lg-3 ps-0 order-lg-2 order-1'>
                            <div className='faq-lottie w-100'>
                                <Lottie className='faq-lottie'
                                    loop
                                    animationData={faq}
                                    play
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Faqs
