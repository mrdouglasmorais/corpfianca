import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Funfact1 = () => {
	return (
		<section className="tj-counter-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								Fun facts
							</span>
							<h2 className="sec-title text-anim">
								Exploring fun tidbits and fascinating facts
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="counter-wrapper">
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={93} symbol={"%"} />
								<span className="sub-title">Complete project</span>
							</div>
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={20} symbol={"M"} />
								<span className="sub-title">Reach worldwide</span>
							</div>
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={8} symbol={".5x"} />
								<span className="sub-title">Faster growth</span>
							</div>
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={100} isSup={"+"} />
								<span className="sub-title">Awards archived</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Funfact1;
