import React, { useState } from 'react';
import { Images } from "../../../../assets/assets";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from 'react-lottie-player'
import playbtn from "../../../../assets/json-files/play-btn.json";
import "./Bst-Provider.css";

function BestProviders() {
	const [isPlaying, setIsPlaying] = useState(false);

	const handleIconClick = () => {
		setIsPlaying(true);
	}

	return (
		<>
			<section className='lead-providers'>
				<Container fluid className="custom-container">
					<Row className='align-items-center padding-bottom'>
						<Col lg={7}>
							<div className='lead-img-container'>
								<img src={Images.leadprovider1} className="img-fluid" alt="img" />
							</div>
						</Col>
						<Col lg={5} className='d-flex justify-content-end  ps-xl-5 ps-lg-3 ps-0'> 
							<div className='lead-provider-content'>
								<h4 className='theme-clr '>Find The Leading Providers In Your Area Within 20 Seconds.</h4>
								<p>We’ve found the top internet, TV and streaming providers, their best offers and most popular plans just for you. When you’ve found what you need, place your order and pat yourself on the back.</p>
								<div className='baner-btn'>
									<button className='btn theme-btn'>Get A Quote</button>
								</div>
							</div>
						</Col>
					</Row>
					<Row className='align-items-center padding-bottom'>
						<Col lg={5}>
							<div className='lead-provider-content'>
								<h4 className='theme-clr '>Comlink Bundle Provide Best Deal On Internet Services</h4>
								<p>Searching for an internet or TV provider can be hectic. Contact Us, and we will guide you about the best feasible options according to your zip code.</p>
								<div className='baner-btn'>
									<button className='btn theme-btn'>Get A Quote</button>
								</div>
							</div>
						</Col>
						<Col lg={7} className='d-flex justify-content-end  ps-xl-5 ps-lg-3 ps-0'>
							<div className='lead-vidoe-container relative'>
								<div id="myVideo">
									{isPlaying ? (
										<iframe className='iframe-video' width="100%" height="500" src="https://www.youtube.com/embed/2QJ3w_xJBwk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
									) : (
										<>
											<img src={Images.videoposter} className="poster-image" alt="Poster" />
											<div className='play-icon' onClick={handleIconClick}>
												<div id='playButton'>
													<Lottie
														loop
														animationData={playbtn}
														play
													/>
												</div>
											</div>
										</>
									)}
								</div>
							</div>
						</Col>
					</Row>
					<Row className='align-items-center padding-bottom'>
						<Col lg={7}>
							<div className='lead-img-container'>
								<img src={Images.leadprovider2} className="img-fluid" alt="img" />
							</div>
						</Col>
						<Col lg={5} className='d-flex justify-content-end  ps-xl-5 ps-lg-3 ps-0'>
							<div className='lead-provider-content'>
								<h4 className='theme-clr '>High-Speed Internet Is Just A Call Away</h4>
								<p>Finding an Internet service provider can be lengthy and complicated. As it requires a lot of research and
									raises many questions. Hence, we are here to answer all of your queries regarding internet providers in your
									area. Our representatives can assist you regarding these kinds of services. Therefore, you can call us to
									obtain all the information regarding Internet providers in your area.</p>
								<div className='baner-btn'>
									<button className='btn theme-btn'>Call To Order</button>
									<button className='btn green-borderd-btn ms-4'>Check Provider List</button>
								</div>
							</div>
						</Col>
					</Row>
					<Row className='align-items-center padding-bottom'>
						<Col lg={5}>
							<div className='lead-provider-content'>
								<h4 className='theme-clr '>Make Most Of Your Money</h4>
								<p>Most of the time, telecommunications companies offer multiple services to their customers. Consequently, subscribing to more than one service from the same provider can give you an incredible concession. It saves your efforts as well and gets you everything in one place. It usually includes discounted home phone and Internet services in their plans. Therefore, you can get superfast Internet access along with high-quality entertainment at a reasonable price. Comlinkbundle has all of the top providers on the panel. Call us to grab the best deals.</p>
								<div className='baner-btn'>
									<button className='btn theme-btn'>Call To Order</button>
								</div>
							</div>
						</Col>
						<Col lg={7} className='d-flex justify-content-end ps-xl-5 ps-lg-3 ps-0'>
							<div className='lead-img-container'>
								<img src={Images.leadprovider4} className="img-fluid" alt="img" />
							</div>
						</Col>
					</Row>
					<Row className='align-items-center padding-bottom'>
						<Col lg={7}>
							<div className='lead-img-container'>
								<img src={Images.leadprovider3} className="img-fluid" alt="img" />
							</div>
						</Col>
						<Col lg={5} className='d-flex justify-content-end ps-xl-5 ps-lg-3 ps-0'>
							<div className='lead-provider-content'>
								<h4 className='theme-clr '>Sports Assortment</h4>
								<p>Don’t miss the magical moments; get all of the action with Comlink Bundle as we bring all of your favorite local sports channels. We bring you LIVE STREAMING of your favorite live sports and get on-demand shows. Moreover, you can stream all the local, and international sports live.</p>
								<ul className='sporting-foundations'>
									<li>
										<img src={Images.sport1} className="img-fluid" alt="img" />
									</li>
									<li>
										<img src={Images.sport2} className="img-fluid" alt="img" />
									</li>
									<li>
										<img src={Images.sport3} className="img-fluid" alt="img" />
									</li>
									<li>
										<img src={Images.sport4} className="img-fluid" alt="img" />
									</li>
									<li>
										<img src={Images.sport5} className="img-fluid" alt="img" />
									</li>
									<li>
										<img src={Images.sport6} className="img-fluid" alt="img" />
									</li>
									<li>
										<img src={Images.sport7} className="img-fluid" alt="img" />
									</li>
								</ul>
								<div className='baner-btn'>
									<button className='btn theme-btn'>Call To Order</button>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}

export default BestProviders;
