import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About11 = () => {
	return (
		<section className="tj-about-info section-space">
			<div className="container">
				<div className="row rg-30 justify-content-between">
					<div className="col-lg-6 col-md-12">
						<div className="pricing-left-content">
							<div className="sec-heading mb-0">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									About our company
								</span>
								<h2 className="sec-title text-anim">
									Crafting success tailored solution for each & every challenges
								</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="desc mb-30 wow fadeInUp" data-wow-delay="0.3s">
							<p>
								Our mission is to empowers businesses off all size to thrive in
								an businesses ever changing marketplace. We are committed to the
								delivering exceptional in the value through our strategic inset,
								innovative approaches. Our mission is to empower businesses of
								all sizes to thrive.
							</p>
							<p>
								Committed to the delivering exceptional in the value through our
								strategic inset, innovative approaches empower.
							</p>
						</div>
						<div className="about-btn wow fadeInUp" data-wow-delay="0.5s">
							<ButtonPrimary text={"Learn more"} url={"/contact"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About11;
