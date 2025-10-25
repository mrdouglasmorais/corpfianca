'use client';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import FunfactSingle from '@/components/shared/funfact/FunfactSingle';
import borderRadiusAnimation from '@/libs/borderRadiusAnimation';
import { useGSAP } from '@gsap/react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

const About1 = () => {
  const t = useTranslations('about_section');
  const animContainerRef = useRef();

  useGSAP(
    () => {
      borderRadiusAnimation('.tj-about-section');
    },
    { scope: animContainerRef },
  );
  return (
    <section ref={animContainerRef}>
      <div className="tj-about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="about-left-content">
                <div className="sec-heading">
                  <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                    {t('subtitle')}
                  </span>
                  <h2 className="sec-title text-anim">{t('title')}</h2>
                  <div className="desc wow fadeInUp" data-wow-delay="0.3s">
                    <p>{t('description')}</p>
                  </div>
                </div>
                <div className="about-feature-item wow fadeInUp" data-wow-delay="0.5s">
                  <div className="feature-box">
                    <div className="feature-left">
                      <div className="check-list-one">
                        <ul>
                          <li>
                            <i className="tji-double-check"></i>
                            {t('expertise_experience')}
                          </li>
                          <li>
                            <i className="tji-double-check"></i>
                            {t('client_centric')}
                          </li>
                          <li>
                            <i className="tji-double-check"></i>
                            {t('commitment_excellence')}
                          </li>
                        </ul>
                      </div>
                      <div className="about-button">
                        <ButtonPrimary url="/about" text={t('read_more')} />
                      </div>
                    </div>
                  </div>
                  <div className="feature-box">
                    <div className="client-experience">
                      <ul className="images-thumb">
                        <li>
                          <img src="/images/about/thumb-1.png" alt="Images" />
                        </li>
                        <li>
                          <img src="/images/about/thumb-2.png" alt="Images" />
                        </li>
                        <li>
                          <img src="/images/about/thumb-3.png" alt="Images" />
                        </li>
                        <li className="plus">
                          <i className="fa-sharp fa-solid fa-plus"></i>
                        </li>
                      </ul>
                      <div className="funfact-item-one">
                        <FunfactSingle currentValue={3} symbol={'K+'} />
                        <span className="sub-title">{t('happy_clients')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-bg-images">
          <div className="about-shape-1 hover:shine">
            <img src="/images/about/h2-shape-1.webp" alt="Shapes" />
          </div>
          <div className="about-shape-2 hover:shine">
            <img src="/images/about/h2-shape-2.webp" alt="Shapes" />
          </div>
          <div className="about-shape-3 zoominout">
            <img src="/images/icons/star.svg" alt="Shapes" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
