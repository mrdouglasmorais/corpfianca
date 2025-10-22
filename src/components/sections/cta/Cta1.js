import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Cta1 = () => {
	return (
		<section className="tj-cta-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="cta-wrapper">
							<div className="cta-title">
								<h2 className="title text-anim">Get consultant now!</h2>
							</div>
							<div className="cta-button wow fadeInUp" data-wow-delay="0.1s">
								<ButtonPrimary
									text={"Lets talk now"}
									url={"/contact"}
									className="white-btn"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<img
				className="cta-shape-1"
				src="/images/shapes/cta-shapes-1.png"
				alt="Shapes"
			/>
			<img
				className="cta-shape-2"
				src="/images/shapes/cta-shapes-2.png"
				alt="Shapes"
			/>
		</section>
	);
};

export default Cta1;
