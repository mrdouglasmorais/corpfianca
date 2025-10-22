import BrandSlider2 from "@/components/shared/brands/BrandSlider2";

const Brands1 = () => {
	return (
		<section className="tj-brand-section-two section-bottom-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div
							className="sec-heading text-center wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<h6 className="sec-title">
								Junte-se às <span>1000+</span> empresas beneficiadas pela CorpFiança
							</h6>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="tj-brand-slider wow fadeInUp" data-wow-delay="0.3s">
							<BrandSlider2 />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands1;
