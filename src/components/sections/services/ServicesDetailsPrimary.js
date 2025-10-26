"use client";
import Accordion from "@/components/shared/accordion/Accordion";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import { useCurrentItem } from "@/context_api/CurrentItemContext";
import getALlServices from "@/libs/getALlServices";
import { getServiceSlug } from "@/utils/slugUtils";
import { createLocalizedPath } from "@/utils/pathUtils";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useEffect } from "react";
import CtaSidebar from "../cta/CtaSidebar";

const ServicesDetailsPrimary = ({ setCurrentTitle, serviceId }) => {
	const locale = useLocale();
	const items = getALlServices();
	const currentId = useCurrentItem() || serviceId;
	const currentItem = items?.find(({ id }) => currentId === id);

	const title = currentItem?.title || "";
	const titleLarge = currentItem?.titleLarge || "";
	const id = currentItem?.id || null;
	const iconName = currentItem?.iconName || "";
	const img = currentItem?.img || "";	useEffect(() => {
		if (title) {
			setCurrentTitle(title);
		}
	}, [currentId, title]);
	return (
		<section className="tj-service-area section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post mb-0">
								<div
									className="tj-post-thumb hover:shine wow fadeInUp"
									data-wow-delay="0.1s"
								>
									<img
										src="/images/service/tj-service-1.webp"
										alt="post-image"
									/>
								</div>
								<h3 className="tj-post-title text-anim">{titleLarge}</h3>
								<div className="tj-entry-content">
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Our service guides you through the entire strategic planning
										process, from initial goal formulation to precise execution.
										Start with a thorough assessment of your current position
										and market landscape, then help you define clear, actionable
										objectives aligned with your vision. Our approach includes
										developing detailed action plans, setting key performance
										indicators (KPIs), and implementing strategies to ensure
										seamless execution.
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										Our Strategic Planning and Execution service offers a
										thorough approach to formulating and implementing business
										goals. We begin with an in-depth analysis of your business
										and market to identify opportunities and challenges. From
										there, we work with you to define clear, actionable
										objectives and develop a detailed.
									</p>
									<div className="tj-check-list">
										<h4 className="text-anim">Service overview</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											Our mission is to empowers businesses size to thrive in an
											businesses ever changing marketplace. We are committed to
											the delivering exceptionals the value through strategic
											inset.
										</p>
									</div>
									<div
										className="service-check-list mt-4 wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<ul>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Clear vision and direction for your business for
													consultings.
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Enhanced ability to anticipate and respond to market
													changes.
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Data-driven decision-making for strategic planning
													execution.
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Structured approach to achieving your business goals.
												</span>
											</li>
										</ul>
									</div>
									<div className="service-images-wrap">
										<div className="row">
											<div className="col-sm-6">
												<div
													className="image-wrap hover:shine wow fadeInUp"
													data-wow-delay="0.5s"
												>
													<img
														src="/images/service/tj-service-3.webp"
														alt="service-image"
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div
													className="image-wrap hover:shine wow fadeInUp"
													data-wow-delay="0.7s"
												>
													<img
														src="/images/service/tj-service-4.webp"
														alt="service-image"
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="check-list mb-40">
										<h4 className="text-anim">Kye features</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											Our service guides you through the entire strategic
											planning process, from initial goal formulation to precise
											execution. Start with a thorough assessment of your
											current position and market landscape, then help you
											define clear, actionable objectives aligned with your
											vision. Our approach includes developing detailed action
											plans.
										</p>
										<p className="wow fadeInUp" data-wow-delay="0.3s">
											Formulating and implementing business goals. We begin with
											an in-depth analysis of your business and market to
											identify opportunities and challenges. From there, we work
											with you to define clear, actionable.
										</p>
									</div>
									<div className="row rg-30 justify-content-center">
										<div className="col-md-4 col-sm-6">
											<div
												className="tj-feature wow fadeInUp"
												data-wow-delay="0.5s"
											>
												<div className="tj-feature-icon">
													<i className="tji-quick"></i>
												</div>
												<h5 className="tj-feature-title">Quick solutions</h5>
												<div className="desc">
													<p>
														Provide hands-on guidance and support during the
														execution strategic
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div
												className="tj-feature wow fadeInUp"
												data-wow-delay="0.7s"
											>
												<div className="tj-feature-icon">
													<i className="tji-results"></i>
												</div>
												<h5 className="tj-feature-title">Proven Results</h5>
												<div className="desc">
													<p>
														Benefit from the expertise of seasoned consultants
														who offer strategic
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div
												className="tj-feature wow fadeInUp"
												data-wow-delay="0.9s"
											>
												<div className="tj-feature-icon">
													<i className="tji-personalization"></i>
												</div>
												<h5 className="tj-feature-title">Personalization</h5>
												<div className="desc">
													<p>
														Ensure that strategies are effectively implemented
														and objectives
													</p>
												</div>
											</div>
										</div>
									</div>

									<div
										className="tj-post-thumb mt-30 mb-0 hover:shine wow fadeInUp"
										data-wow-delay="0.1s"
									>
										<img
											src="/images/service/tj-service-2.webp"
											alt="post-image"
										/>
										<PopupVideo>
											<Link
												className="play-btn glightbox video-popup"
												href="https://www.youtube.com/watch?v=eEzD-Y97ges"
											>
												<i className="fa-sharp fa-solid fa-play"></i>
											</Link>
										</PopupVideo>
									</div>
									<h4 className="text-anim">General questions</h4>
									<Accordion>
										<div className="tj-faq mt-30">
											<div
												className="accordion tj-faq-style"
												id="accordionExample"
											>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.1s"
												>
													<h2 className="accordion-header active">
														{/* <!-- button --> */}
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-1"
															aria-expanded="false"
														>
															How do consultants add value to a business?
														</button>
													</h2>
													{/* <!-- content --> */}
													<div
														id="collapseOne-1"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																You might need a consultant if you're facing
																specifics challenges, such as stagnating our
																growth, operational inefficiencies, strategic
																issues, or if you lack expertise in certain
																areas. Consultants can also help if you need an
																objective perspective on your business
																businesses ever changing marketplace. We are
																committed to the delivering exceptional the
																value through strategic.
															</p>
														</div>
													</div>
												</div>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.3s"
												>
													<h2 className="accordion-header ">
														{/* <!-- button --> */}
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-2"
															aria-expanded="false"
														>
															How do I know if my business needs a consultant?
														</button>
													</h2>
													{/* <!-- content --> */}
													<div
														id="collapseOne-2"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																You might need a consultant if you're facing
																specifics challenges, such as stagnating our
																growth, operational inefficiencies, strategic
																issues, or if you lack expertise in certain
																areas. Consultants can also help if you need an
																objective perspective on your business
																businesses ever changing marketplace. We are
																committed to the delivering exceptional the
																value through strategic.
															</p>
														</div>
													</div>
												</div>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.5s"
												>
													<h2 className="accordion-header ">
														{/* <!-- button --> */}
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-3"
															aria-expanded="false"
														>
															How do business consultants charge for their
															services?
														</button>
													</h2>
													{/* <!-- content --> */}
													<div
														id="collapseOne-3"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																You might need a consultant if you're facing
																specifics challenges, such as stagnating our
																growth, operational inefficiencies, strategic
																issues, or if you lack expertise in certain
																areas. Consultants can also help if you need an
																objective perspective on your business
																businesses ever changing marketplace. We are
																committed to the delivering exceptional the
																value through strategic.
															</p>
														</div>
													</div>
												</div>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.7s"
												>
													<h2 className="accordion-header ">
														{/* <!-- button --> */}
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-4"
															aria-expanded="false"
														>
															Can a business consultant guarantee results?
														</button>
													</h2>
													{/* <!-- content --> */}
													<div
														id="collapseOne-4"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																You might need a consultant if you're facing
																specifics challenges, such as stagnating our
																growth, operational inefficiencies, strategic
																issues, or if you lack expertise in certain
																areas. Consultants can also help if you need an
																objective perspective on your business
																businesses ever changing marketplace. We are
																committed to the delivering exceptional the
																value through strategic.
															</p>
														</div>
													</div>
												</div>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.9s"
												>
													<h2 className="accordion-header ">
														{/* <!-- button --> */}
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-5"
															aria-expanded="false"
														>
															How can I measure the success of a consulting
															engagement?
														</button>
													</h2>
													{/* <!-- content --> */}
													<div
														id="collapseOne-5"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																You might need a consultant if you're facing
																specifics challenges, such as stagnating our
																growth, operational inefficiencies, strategic
																issues, or if you lack expertise in certain
																areas. Consultants can also help if you need an
																objective perspective on your business
																businesses ever changing marketplace. We are
																committed to the delivering exceptional the
																value through strategic.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</Accordion>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<aside className="tj-service-sidebar">
							{/* <!-- Service List --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h5 className="tj-sidebar-widget-title">Related service</h5>
								<div className="service-category">
									<ul>
										{items?.length
											? items?.map(({ title, id }, idx) => (
													<li key={idx}>
														<Link
															className={`${currentId === id ? "active" : ""}`}
															href={createLocalizedPath(`/services/${getServiceSlug({ title, id })}`, locale)}
														>
															{title}
															<i className="tji-angle-right"></i>
														</Link>
													</li>
											  ))
											: ""}
									</ul>
								</div>
							</div>
							{/* <!-- cta --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<CtaSidebar />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetailsPrimary;
