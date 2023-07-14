import React from 'react'
import { Container } from "react-bootstrap";
import "../CmsBanner/CmsBanner.css"
import ComlinkTv from "../../../assets/images/comlinktv.png"

function Internet() {
	return (
		<div className='banner_content'>
			<div className='cms-pages-baner internet_banner'>
				<Container fluid className="custom-container">
					<div className='cms-heading-content text-white'>
						<h4>EVERYTHING YOU WANT TO DISCOVER</h4>
						<h2>ABOUT THE INTERNET PROVIDERS!</h2>
						<p>Choose The Best Internet Provider With The Best Plans Particularly Designed For The Faster Speeds.</p>
					</div>
				</Container>
			</div>
            <div className='custom-container'>
				<div className='cable_tv_content'>
					<img src={ComlinkTv} />
				</div>
			</div>
		</div>
	)
}

export default Internet
