'use client';
import Accordion from "@/components/shared/accordion/Accordion";
import { useTranslations } from 'next-intl';

const Faq3 = () => {
	const t = useTranslations('navigation');

	return (
		<section className="tj-faq-area section-space">
			<div className="container">
				<div className="row rg-50 justify-content-between">
					<div className="col-xl-5 col-lg-5">
						<div className="sec-heading mb-0 tj-sticky-top">
							<h2 className="sec-title text-anim">
								{t('general_questions')}
							</h2>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6">
						<Accordion>
							<div className="tj-faq">
								<div
									className="accordion tj-faq-style style-2"
									id="accordionExample"
								>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.1s"
									>
										<h2 className="accordion-header active">
											{/* <!-- button --> */}
											<button
												className="accordion-button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-1"
												aria-expanded="false"
											>
												{t('faq_question_1')}
											</button>
										</h2>
										{/* <!-- content --> */}
										<div
											id="collapseOne-1"
											className="accordion-collapse collapse show"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													{t('faq_answer')}
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
												{t('faq_question_2')}
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
													{t('faq_answer')}
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
												{t('faq_question_3')}
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
													{t('faq_answer')}
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
												{t('faq_question_4')}
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
													{t('faq_answer')}
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
												{t('faq_question_5')}
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
													{t('faq_answer')}
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
		</section>
	);
};

export default Faq3;
