"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import tjHeroStackAnimation from "@/libs/tjHeroStackAnimation";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useRef } from "react";

const Hero = () => {
	const animContainerRef = useRef();

	useGSAP(
		() => {
			tjHeroStackAnimation(".tj-hero-section", animContainerRef);
		},
		{
			scope: animContainerRef,
		}
	);

	return (
		<div ref={animContainerRef} className="heroStack">
			<div className="stackOverlay"></div>
			<section className="tj-hero-section">
				<div className="container">
					<div className="row">
						<div className="hero-wrapper">
							<div className="hero-content">
								<h1 className="hero-title text-anim">
									Maximise growth qualified business{" "}
									<span className="active-color">consulting</span>
								</h1>
								<div className="desc wow fadeInUp" data-wow-delay="0.1s">
									<p>
										Transform your business with expert consultancy services our
										team of seasoned consultants unparalleled.
									</p>
								</div>
								<div className="wow fadeInUp" data-wow-delay="0.3s">
									<ButtonPrimary
										text={"Free consultation"}
										url={"/contact"}
										className={"hero-button"}
									/>
								</div>
								<div className="hero-shapes-1 move-anim">
									<img src="/images/shapes/hero-1.png" alt="Shapes" />
								</div>
								<div className="hero-shapes-2 zoominout">
									<img src="/images/shapes/hero-3.png" alt="Shapes" />
								</div>
							</div>
							<div className="hero-images-box">
								<div className="hero-images">
									<img src="/images/hero/h1-hero-1.webp" alt="Images" />
								</div>
								<div className="images-shapes move-anim-2">
									<img src="/images/shapes/hero-2.png" alt="Shapes" />
								</div>
								<div className="hero-circle">
									<div className="circle-wrap">
										<img
											className="rotate-image"
											src="/images/shapes/play-text.png"
											alt="image"
										/>
										<PopupVideo>
											<Link
												className="circle glightbox video-popup"
												href="https://www.youtube.com/watch?v=MLpWrANjFbI"
											>
												<i className="fa-sharp fa-solid fa-play"></i>
											</Link>
										</PopupVideo>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hero_scroll d-none d-lg-block">
					<Link className="down" href="#scroll-hero">
						<span>
							<i className="tji-arrow-bown"></i>
						</span>
						Scroll
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Hero;
