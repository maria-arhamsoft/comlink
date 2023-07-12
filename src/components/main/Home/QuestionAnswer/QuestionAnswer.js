import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Lottie from 'react-lottie-player'
import callUs from "../../../../assets/json-files/call-us.json";
import providers from "../../../../assets/json-files/providers.json";
import bsetDeal from "../../../../assets/json-files/bset-deal.json";
import "./QuestionAnswer.css";

function QuestionAnswer() {
    return (
        <>
            <section className='QuestionAnswer'>
                <Container fluid className="custom-container">
                    <Row>
                        <Col lg={3}>
                            <div className='blue-box heading-content'>
                                <h5>We Have The</h5>
                                <h5><span className='big-heading'>Answers</span></h5>
                                <h5>For Your</h5>
                                <h5><span className='big-heading'>Questions!</span></h5>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='white-box QuesnAns-content'>
                                <div className='question-lottie'>
                                    <Lottie
                                        loop
                                        animationData={callUs}
                                        play
                                    />
                                </div>
                                <h6 className='theme-clr'>Give Us a Call</h6>
                                <p className='mt lg-3 mt-2 mt-1'>  Searching for an internet or TV provider can be hectic. Contact Us, and we will guide you about the best feasible options according to your zip code. </p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='white-box  QuesnAns-content'>
                                <div className='question-lottie'>
                                    <Lottie
                                        loop
                                        animationData={providers}
                                        play
                                    />
                                </div>
                                <h6 className='theme-clr'>Compare Providers</h6>
                                <p className='mt lg-3 mt-2 mt-1'>Assess your needs, compare rate plans and prices of nearby Phone TV & Internet providers, and narrow down your choice, which ideally suits your needs.</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='white-box  QuesnAns-content'>
                                <div className='question-lottie'>
                                    <Lottie
                                        loop
                                        animationData={bsetDeal}
                                        play
                                    />
                                </div>
                                <h6 className='theme-clr'>Choose The Best Deal</h6>
                                <p className='mt lg-3 mt-2 mt-1'>Connect to the provider of your choice with us and order our services with a quick phone call. Sit back and relax as you have got the best of the best.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default QuestionAnswer
