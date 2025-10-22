"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import borderRadiusAnimation from "@/libs/borderRadiusAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const About1 = () => {
	const animContainerRef = useRef();

	useGSAP(
		() => {
			borderRadiusAnimation(".tj-about-section");
		},
		{ scope: animContainerRef }
	);
	return (
		<section ref={animContainerRef}>
			<div className="tj-about-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-6"></div>
						<div className="col-lg-6">
							<div className="about-left-content">
								<div className="sec-heading">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										About our company
									</span>
									<h2 className="sec-title text-anim">
										Crafting success tailored solution for each & every challenges
									</h2>
									<div className="desc wow fadeInUp" data-wow-delay="0.3s">
										<p>
											Our mission is to empowers businesses off all size to
											thrive in an our businesses ever changing marketplace. We
											are committed to the delivering exceptional in the value
											through our strategic inset, innovative approaches. Our
											mission is to empower businesses of all sizes to thrive.
										</p>
									</div>
								</div>
								<div
									className="about-feature-item wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<div className="feature-box">
										<div className="feature-left">
											<div className="check-list-one">
												<ul>
													<li>
														<i className="tji-double-check"></i>Expertise and
														experience
													</li>
													<li>
														<i className="tji-double-check"></i>Client Centric
														approach
													</li>
													<li>
														<i className="tji-double-check"></i>Commitment
														excellences
													</li>
												</ul>
											</div>
											<div className="about-button">
												<ButtonPrimary url="/about" text={"Read more"} />
											</div>
										</div>
									</div>
									<div className="feature-box">
										<div className="client-experience">
											<ul className="images-thumb">
												<li>
													<img src="/images/about/thumb-1.png" alt="Images" />
												</li>
												<li>
													<img src="/images/about/thumb-2.png" alt="Images" />
												</li>
												<li>
													<img src="/images/about/thumb-3.png" alt="Images" />
												</li>
												<li className="plus">
													<i className="fa-sharp fa-solid fa-plus"></i>
												</li>
											</ul>
											<div className="funfact-item-one">
												<FunfactSingle currentValue={3} symbol={"K+"} />
												<span className="sub-title">
													Happy clients all over <br /> world now.
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="about-bg-images">
					<div className="about-shape-1 hover:shine">
						<img src="/images/about/h2-shape-1.webp" alt="Shapes" />
					</div>
					<div className="about-shape-2 hover:shine">
						<img src="/images/about/h2-shape-2.webp" alt="Shapes" />
					</div>
					<div className="about-shape-3 zoominout">
						<img src="/images/icons/star.svg" alt="Shapes" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About1;
