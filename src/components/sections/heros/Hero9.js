"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Hero9 = () => {
	const { isRtl } = {};
	const marqueeItems = [
		"Expertise",
		"Consulting",
		"Business",
		"Growth",
		"Expertise",
		"Consulting",
		"Business",
		"Growth",
		"Expertise",
		"Consulting",
		"Business",
		"Growth",
		"Expertise",
		"Consulting",
		"Business",
		"Growth",
	];
	return (
		<section className="h9-hero">
			<div className="h9-hero-marquee-wrapper">
				<div className="h9-hero-marquee">
					<div className="marquee-slider-wrapper">
						<Swiper
							spaceBetween={0}
							slidesPerView="auto"
							freeMode={true}
							centeredSlides={true}
							loop={true}
							speed={4000}
							allowTouchMove={false}
							autoplay={{
								delay: 1,
								disableOnInteraction: true,
							}}
							dir={`${isRtl ? "rtl" : "ltr"}`}
							modules={[Autoplay]}
							className="h9-hero-marquee-slider"
							wrapperClass="marquee-wrapper"
						>
							{marqueeItems?.length
								? marqueeItems?.map((title, idx) => (
										<SwiperSlide key={idx} className="marquee-item">
											<div className="marquee-title">
												<div
													className={`text ${idx % 2 !== 0 ? "stroke" : ""}`}
												>
													{title}
												</div>
											</div>
											<div className="marquee-icons">
												<img
													src="/images/icons/h9-marquee-start.svg"
													alt="Icons"
												/>
											</div>
										</SwiperSlide>
								  ))
								: ""}
						</Swiper>
					</div>
				</div>
			</div>

			{/* <!-- hero content --> */}
			<div className="h9-hero-wrapper ">
				<div className="container tj-gap-0">
					<div className="row align-items-center">
						<div className="col-12 col-lg-6">
							<div className="h9-hero-content-wrapper">
								<div className="h9-hero-content">
									<div className="hero-sub-title">NUMBE #1 SOLVER</div>
									<h1 className="hero-title text-anim">
										Expert guidance for ambitious companies
									</h1>
									<div className="desc wow fadeInUp" data-wow-delay="0.1s">
										<p>
											Transform your business with expert consultancy services
											our team of seasoned consultants unparalleled.
										</p>
									</div>
									<div
										className="h9-hero-action wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<ButtonPrimary
											text={"Free consultation"}
											url={"/contact"}
											className={"hero-button"}
										/>
										<Link className="service-button text-btn" href="/contact">
											Learn more here<i className="tji-angle-right"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-6">
							<div className="h9-hero-banner-wrapper">
								<div className="h9-hero-banner">
									<img src="/images/hero/h9-hero-banner.webp" alt="Images" />
									<div className="h9-hero-chart-wrapper">
										<div className="h9-hero-chart move-anim">
											<img src="/images/hero/h9-hero-chart.webp" alt="Shapes" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero9;
