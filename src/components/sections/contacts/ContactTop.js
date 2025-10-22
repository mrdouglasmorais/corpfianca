import Link from "next/link";

const ContactTop = () => {
	return (
		<section className="tj-contact-area section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								CONTACT US
							</span>
							<h2 className="sec-title text-anim">Our contact information</h2>
						</div>
					</div>
				</div>
				<div className="row rg-30">
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<div className="contact-icon">
								<i className="tji-email"></i>
							</div>
							<h3 className="contact-title">Email us</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:solvior@gmail.com">solvior@gmail.com</Link>
								</li>
								<li>
									<Link href="mailto:support@gmail.com">support@gmail.com</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.3s"
						>
							<div className="contact-icon">
								<i className="tji-phone"></i>
							</div>
							<h3 className="contact-title">Call us</h3>
							<ul className="contact-list">
								<li>
									<Link href="tel:52682145622">+526-8214-5622</Link>
								</li>
								<li>
									<Link href="tel:22635652552">+226-3565-2552</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.5s"
						>
							<div className="contact-icon">
								<i className="tji-location"></i>
							</div>
							<h3 className="contact-title">Our Location</h3>
							<p>993 Renner Burg, West Rond, MT 94251-030</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.7s"
						>
							<div className="contact-icon">
								<i className="tji-chat"></i>
							</div>
							<h3 className="contact-title">Live chat</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:livechat@solvior.com">
										livechat@solvior.com
									</Link>
								</li>
								<li className="active">
									<Link href="/contact">Need help?</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactTop;
