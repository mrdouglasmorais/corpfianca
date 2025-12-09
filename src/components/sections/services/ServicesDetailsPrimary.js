'use client';
import Accordion from '@/components/shared/accordion/Accordion';
import { useCurrentItem } from '@/context_api/CurrentItemContext';
import getALlServices from '@/libs/getALlServices';
import { createLocalizedPath } from '@/utils/pathUtils';
import { getServiceSlug } from '@/utils/slugUtils';
import getLocalizedServiceContent from '@/utils/serviceContent';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect } from 'react';
import CtaSidebar from '../cta/CtaSidebar';

const ServicesDetailsPrimary = ({ setCurrentTitle, serviceId }) => {
  const locale = useLocale();
  const t = useTranslations('navigation');
  const items = getALlServices();
  const currentId = useCurrentItem() || serviceId;
  const currentItem = items?.find(({ id }) => currentId === id);
  const localizedContent = getLocalizedServiceContent(currentItem, locale);
  const localizedTitle = localizedContent.title || currentItem?.title || '';
  const titleLarge = localizedContent.titleLarge || '';
  const summary = localizedContent.summary || '';
  const details = localizedContent.details || '';
  const highlights = localizedContent.highlights || [];
  const id = currentItem?.id || null;
  const iconName = currentItem?.iconName || '';
  const img = currentItem?.img || '';
  useEffect(() => {
    if (localizedTitle) {
      setCurrentTitle(localizedTitle);
    }
  }, [currentId, localizedTitle, setCurrentTitle]);
  return (
    <section className="tj-service-area section-space">
      <div className="container">
        <div className="row rg-50">
          <div className="col-lg-8">
            <div className="tj-post-wrapper">
              <div className="tj-post-single-post mb-0">
                <div className="tj-post-thumb hover:shine wow fadeInUp" data-wow-delay="0.1s">
                  <img src={img ? img : '/images/service/tj-service-1.webp'} alt="post-image" />
                </div>
                <h3 className="tj-post-title text-anim">{titleLarge}</h3>
                <div className="tj-entry-content">
                  <p className="wow fadeInUp" data-wow-delay="0.1s">
                    {summary}
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    {details}
                  </p>
                  <div className="tj-check-list">
                    <h4 className="text-anim">{t('service_overview')}</h4>
                    <p className="wow fadeInUp" data-wow-delay="0.1s">
                      {t('service_overview_desc')}
                    </p>
                  </div>
                  <div className="service-check-list mt-4 wow fadeInUp" data-wow-delay="0.3s">
                    <ul>
                      {highlights.length
                        ? highlights.map((item, idx) => (
                            <li key={idx}>
                              <i className="tji-double-check"></i>
                              <span>{item}</span>
                            </li>
                          ))
                        : (
                            <>
                              <li>
                                <i className="tji-double-check"></i>
                                <span>{t('service_feature_1')}</span>
                              </li>
                              <li>
                                <i className="tji-double-check"></i>
                                <span>{t('service_feature_2')}</span>
                              </li>
                              <li>
                                <i className="tji-double-check"></i>
                                <span>{t('service_feature_3')}</span>
                              </li>
                              <li>
                                <i className="tji-double-check"></i>
                                <span>{t('service_feature_4')}</span>
                              </li>
                            </>
                          )}
                    </ul>
                  </div>
                  <div className="check-list mb-40">
                    <h4 className="text-anim">{t('key_features')}</h4>
                    <p className="wow fadeInUp" data-wow-delay="0.1s">
                      {t('key_features_desc_1')}
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      {t('key_features_desc_2')}
                    </p>
                  </div>
                  <div className="row rg-30 justify-content-center">
                    <div className="col-md-4 col-sm-6">
                      <div className="tj-feature wow fadeInUp" data-wow-delay="0.5s">
                        <div className="tj-feature-icon">
                          <i className="tji-quick"></i>
                        </div>
                        <h5 className="tj-feature-title">{t('quick_solutions')}</h5>
                        <div className="desc">
                          <p>{t('quick_solutions_desc')}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="tj-feature wow fadeInUp" data-wow-delay="0.7s">
                        <div className="tj-feature-icon">
                          <i className="tji-results"></i>
                        </div>
                        <h5 className="tj-feature-title">{t('proven_results')}</h5>
                        <div className="desc">
                          <p>{t('proven_results_desc')}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="tj-feature wow fadeInUp" data-wow-delay="0.9s">
                        <div className="tj-feature-icon">
                          <i className="tji-personalization"></i>
                        </div>
                        <h5 className="tj-feature-title">{t('personalization')}</h5>
                        <div className="desc">
                          <p>{t('personalization_desc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-anim">{t('general_questions')}</h4>
                  <Accordion>
                    <div className="tj-faq mt-30">
                      <div className="accordion tj-faq-style" id="accordionExample">
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                          <h2 className="accordion-header active">
                            <button
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne-1"
                              aria-expanded="false"
                            >
                              {t('faq_question_1')}
                            </button>
                          </h2>
                          <div
                            id="collapseOne-1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>{t('faq_answer')}</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                          <h2 className="accordion-header ">
                            <button
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne-2"
                              aria-expanded="false"
                            >
                              {t('faq_question_2')}
                            </button>
                          </h2>
                          <div
                            id="collapseOne-2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>{t('faq_answer')}</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                          <h2 className="accordion-header ">
                            <button
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne-3"
                              aria-expanded="false"
                            >
                              {t('faq_question_3')}
                            </button>
                          </h2>
                          <div
                            id="collapseOne-3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>{t('faq_answer')}</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.7s">
                          <h2 className="accordion-header ">
                            <button
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne-4"
                              aria-expanded="false"
                            >
                              {t('faq_question_4')}
                            </button>
                          </h2>
                          <div
                            id="collapseOne-4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>{t('faq_answer')}</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.9s">
                          <h2 className="accordion-header ">
                            <button
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne-5"
                              aria-expanded="false"
                            >
                              {t('faq_question_5')}
                            </button>
                          </h2>
                          <div
                            id="collapseOne-5"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p>{t('faq_answer')}</p>
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
              <div className="tj-sidebar-widget wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="tj-sidebar-widget-title">{t('related_service')}</h5>
                <div className="service-category">
                  <ul>
                    {items?.length
                      ? items?.map((service, idx) => {
                          const serviceTitle =
                            getLocalizedServiceContent(service, locale).title || service.title;
                          return (
                            <li key={idx}>
                              <Link
                                className={`${currentId === service.id ? 'active' : ''}`}
                                href={createLocalizedPath(
                                  `/services/${getServiceSlug(service)}`,
                                  locale,
                                )}
                              >
                                {serviceTitle}
                                <i className="tji-angle-right"></i>
                              </Link>
                            </li>
                          );
                        })
                      : ''}
                  </ul>
                </div>
              </div>
              {/* <!-- cta --> */}
              <div className="tj-sidebar-widget wow fadeInUp" data-wow-delay="0.1s">
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
