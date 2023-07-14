import React from 'react'
import "../CmsBanner/CmsBanner.css"
import { Container} from "react-bootstrap";
import ComlinkTv from "../../../assets/images/comlinktv.png"
function CableTv() {
	return (
		<div>
			<div className='banner_content'>
				<div className='cms-pages-baner tv_cable_banner'>
					<Container fluid className="custom-container">
						<div className='cms-heading-content text-white'>
							<h4>CONNECTING PEOPLE WITH</h4>
							<h2>FUN & ENTERTAINMENT</h2>
							<p>Compare Tv Providers To Discover The Best Deal. We Have Your Favorite Channels And Shows Of Your Choice.</p>
						</div>
					</Container>
				</div>
			</div>
			<div className='custom-container'>
				<div className='cable_tv_content'>
					<img src={ComlinkTv} />
				</div>
			</div>

		</div>
	)
}

export default CableTv
