"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import Link from "next/link";

const Hero4 = () => {
	return (
		<section className="tj-hero-section-three">
			<div className="container">
				<div className="row">
					<div className="hero-wrapper-three">
						<div className="hero-content-area">
							<div className="hero-content-three">
								<h1 className="hero-title text-anim">
									Tailored <span>consulting</span> for the modern business
								</h1>
								<div className="desc wow fadeInUp" data-wow-delay="0.1s">
									<p>
										Transform your business with expert consultancy services our
										team of seasoned consultants unparalleled.
									</p>
								</div>
								<div className="btn-area wow fadeInUp" data-wow-delay="0.3s">
									<ButtonPrimary
										text={"Free consultation"}
										url={"/contact"}
										className={"hero-button"}
									/>
									<div className="client-experience">
										<ul className="images-thumb">
											<li className="wow fadeInLeft" data-wow-delay="0.3s">
												<img src="/images/about/thumb-1.png" alt="Images" />
											</li>
											<li className="wow fadeInLeft" data-wow-delay="0.4s">
												<img src="/images/about/thumb-2.png" alt="Images" />
											</li>
											<li className="wow fadeInLeft" data-wow-delay="0.5s">
												<img src="/images/about/thumb-3.png" alt="Images" />
											</li>
											<li className="wow fadeInLeft" data-wow-delay="0.6s">
												<img src="/images/about/thumb-4.png" alt="Images" />
											</li>
										</ul>
									</div>
								</div>
								<span className="shape-1 zoominout">
									<img src="/images/shapes/h4-hero-shape-2.svg" alt="Shapes" />
								</span>
							</div>
							<div
								className="hero-funfact d-lg-flex d-none"
								style={{
									backgroundImage: "url('/images/hero/h4-hero-2.webp')",
								}}
							>
								<div className="counter-item">
									<FunfactSingle currentValue={8} symbol={".5x"} />

									<span className="sub-title">Faster growth</span>
								</div>
								<div className="counter-item">
									<FunfactSingle currentValue={20} symbol={"M"} />
									<span className="sub-title">Reach worldwide</span>
								</div>
								<div className="circle-wrap-item">
									<div className="circle-wrap">
										<img
											className="rotate-image"
											src="/images/shapes/h4-circle.webp"
											alt="image"
										/>
										<Link className="circle" href="/about">
											<i className="tji-arrow-right"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div
							className="hero-images-box-three wow fadeInRight"
							data-wow-delay="0.3s"
						>
							<img src="/images/hero/h4-hero.webp" alt="Images" />
						</div>
						<div
							className="hero-funfact d-lg-none"
							style={{
								backgroundImage: "url('/images/hero/h4-hero-2.webp')",
							}}
						>
							<div className="counter-item">
								<FunfactSingle currentValue={8} symbol={".5x"} />
								<span className="sub-title">Faster growth</span>
							</div>
							<div className="counter-item">
								<FunfactSingle currentValue={20} symbol={"M"} />
								<span className="sub-title">Reach worldwide</span>
							</div>
							<div className="circle-wrap-item">
								<div className="circle-wrap">
									<img
										className="rotate-image"
										src="/images/shapes/h4-circle.webp"
										alt="image"
									/>
									<Link className="circle" href="/about">
										<i className="tji-arrow-right"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="hero-three-bg"
				style={{
					backgroundImage: "url('/images/hero/h4-hero-bg.webp')",
				}}
			></div>
			<div className="hero-shape move-anim">
				<img src="/images/shapes/h4-hero-shape-1.svg" alt="Shapes" />
			</div>
		</section>
	);
};

export default Hero4;
