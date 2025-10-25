'use client';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useLocale, useTranslations } from 'next-intl';

const About11 = () => {
  const t = useTranslations('about_section');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  return (
    <section className="tj-about-info section-space">
      <div className="container">
        <div className="row rg-30 justify-content-between">
          <div className="col-lg-6 col-md-12">
            <div className="pricing-left-content">
              <div className="sec-heading mb-0">
                <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                  {t('subtitle')}
                </span>
                <h2 className="sec-title text-anim">{t('title')}</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="desc mb-30 wow fadeInUp" data-wow-delay="0.3s">
              <p>{t('description_1')}</p>
              <p>{t('description_2')}</p>
            </div>
            <div className="about-btn wow fadeInUp" data-wow-delay="0.5s">
              <ButtonPrimary
                text={tCommon('learn_more')}
                url={createLocalizedPath('/contact', locale)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About11;
