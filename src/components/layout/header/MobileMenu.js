import Link from "next/link";

const MobileMenu = () => {
	return (
		<>
			<div className="body-overlay"></div>
			<div className="hamburger-area" data-lenis-prevent>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_top d-flex align-items-center justify-content-between">
						<div className="hamburger_logo">
							<Link href="/" className="mobile_logo">
								<img src="/images/logos/primary-logo.png" alt="Logo" />
							</Link>
						</div>
						<div className="hamburger_close">
							<button className="hamburger_close_btn hamburgerCloseBtn">
								<i className="fa-thin fa-times"></i>
							</button>
						</div>
					</div>
					<div className="hamburger_search">
						<form method="get" action="#0">
							<button type="submit">
								<i className="fal fa-search"></i>
							</button>
							<input
								type="search"
								autoComplete="off"
								name="s"
								placeholder="Search here"
							/>
						</form>
					</div>

					<div className="hamburger_menu">
						<div className="mobile_menu"></div>
					</div>

					<div className="hamburger-infos">
						<h4 className="hamburger-title">Contact info</h4>
						<div className="contact-info">
							<div className="contact_item">
								<span className="subtitle">Email</span>
								<div className="text">
									<Link className="link" href="mailto:support@solvior.com">
										support@solvior.com
									</Link>
								</div>
							</div>
							<div className="contact_item">
								<span className="subtitle">Phone</span>
								<div className="text">
									<Link className="link" href="tel:000123456789">
										(000) 123 456 789
									</Link>
								</div>
							</div>
							<div className="contact_item">
								<span className="subtitle">Location</span>
								<div className="text">Santa, United State</div>
							</div>
						</div>
					</div>
					<div className="hamburger-socials">
						<h4 className="hamburger-title">Follow us</h4>
						<ul>
							<li>
								<Link href="https://www.facebook.com/">
									<i className="fa-brands fa-facebook-f"></i>
								</Link>
							</li>
							<li>
								<Link href="https://www.instagram.com/">
									<i className="fa-brands fa-instagram"></i>
								</Link>
							</li>
							<li>
								<Link href="https://www.linkedin.com/">
									<i className="fa-brands fa-linkedin-in"></i>
								</Link>
							</li>
							<li>
								<Link href="https://x.com/">
									<i className="fa-brands fa-twitter"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileMenu;
