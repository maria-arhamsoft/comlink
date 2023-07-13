import React from 'react'
import "./GetAQoute.css"
import "../CmsBanner/CmsBanner.css"

import QouteForm from "../../../assets/images/qoute-form.png"
function GetAQoute() {
    return (
        <div className='Qoute__content'>
            <div className='banner_content'>
                <div className='cms-pages-baner get-a-qoute_banner'>
                </div>
            </div>
                <div className='custom-container'>
                  <div className='qoute__form'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form_image'>
                                <img src={QouteForm} alt="QouteForm" />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form_content'>
                                <form>
                                    <div class="form-group mb-4">
                                        <label for="exampleInputEmail1">Your Name</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                    <div class="form-group mb-4">
                                        <label for="exampleInputPassword1">Your Phone</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Your Email</label>
                                        <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password"/>
                                    </div>
                                    <div class="form-group">
                                        <select>
                                            <option>Which Services Are You Interested In ?</option>
                                            <option>CableTv</option>
                                            <option>LAN</option>
                                        </select>
                                    </div>
                                    <div className='terms_condition d-flex align-items-start'>
                                        <input type='checkbox' />
                                        <p className='Submitting_form'>
                                        By Submitting This Form Above You Permit Comlink Express Consent To Contact You At The Number And/Or Email Address You Have Provided Above Via A Representative And With Automated Technology In Relation To This Inquiry Via Phone, E-Mail, Or Sms Text Message. You Understand That Making A Purchase Is Not Required To Consent To Receive Communications From Comlink.
                                        </p>
                                    </div>
                                   <div className='d-flex  justify-content-end mt-4'>
                                   <div className=' theme-btn'>Get In Touch</div>
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
