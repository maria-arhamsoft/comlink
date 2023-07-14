import React from 'react'
import { Container } from "react-bootstrap";
import "../CmsBanner/CmsBanner.css"
import ComlinkTv from "../../../assets/images/comlinktv.png"
function PhonePg() {
  return (
    <div>
      <div className='banner_content'>
			<div className='cms-pages-baner phone_banner'>
				<Container fluid className="custom-container">
					<div className='cms-heading-content text-white'>
						<h4>EXPAND YOUR</h4>
						<h2>EXPAND YOUR</h2>
						<p>Phone Services With Free Premium Features Unlimited Nationwide Calling Call Waiting & Call Forwarding</p>
					</div>
				</Container>
			</div>
            <div className='custom-container'>
				<div className='cable_tv_content'>
					<img src={ComlinkTv} />
				</div>
			</div>
		</div>
    </div>
  )
}

export default PhonePg
