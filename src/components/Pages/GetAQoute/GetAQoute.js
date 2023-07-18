import React from 'react'
import "./GetAQoute.css"
import "../CmsBanner/CmsBanner.css"
import { Container } from "react-bootstrap";
import QouteForm from "../../../assets/images/qoute-form.png"
function GetAQoute() {
    return (
        <div className='Qoute__content'>
            <div className='banner_content'>
                <div className='cms-pages-baner get-a-qoute_banner'>
                    <Container fluid className="custom-container">
                        <div className='cms-heading-content text-white'>
                            <h2>GET A QUOTE</h2>
                            <p>Fill Up The Form And Our Team Will Get Back To You Within 24 Hours</p>
                        </div>
                    </Container>
                </div>
            </div>
            <div className='custom-container'>
                <div className='qoute__form'>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <div className='form_image'>
                                {/* <img src={QouteForm} alt="QouteForm" /> */}
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='form_content'>
                                <form>
                                    <div class="form-group mb-xl-4 mb-lg-3 mb-2">
                                        <label for="exampleInputEmail1">Your Name</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div class="form-groupmb-xl-4 mb-lg-3 mb-2">
                                        <label for="exampleInputPassword1">Your Phone</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Your Email</label>
                                        <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <select>
                                            <option>Which Services Are You Interested In ?</option>
                                            <option>CableTv</option>
                                            <option>LAN</option>
                                        </select>
                                    </div>
                                    <div className='terms_condition d-flex align-items-start'>
                                        <label class="custom-control overflow-checkbox relative">
                                            <input type="checkbox" class="overflow-control-input" />
                                            <span class="overflow-control-indicator "></span>
                                            <span class="overflow-control-description mr-5 2xl:text-lg xl:text-base text-sm dark_color font-light f-size-17 pr-2"><p className='Submitting_form'>
                                                By Submitting This Form Above You Permit Comlink Express Consent To Contact You At The Number And/Or Email Address You Have Provided Above Via A Representative And With Automated Technology In Relation To This Inquiry Via Phone, E-Mail, Or Sms Text Message. You Understand That Making A Purchase Is Not Required To Consent To Receive Communications From Comlink.
                                            </p></span>
                                        </label>
                                    </div>
                                    <div className='d-flex  justify-content-end mt-xl-4 mt-3 mb-xl-4 mb-3'>
                                        <div className='btn theme-btn'>Get In Touch</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetAQoute
