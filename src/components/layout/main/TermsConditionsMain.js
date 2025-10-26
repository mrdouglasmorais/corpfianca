'use client';
import HeroInner from '@/components/sections/heros/HeroInner';
import { useTranslations } from 'next-intl';

const TermsConditionsMain = () => {
  const t = useTranslations('terms_conditions');

  return (
    <main>
      <HeroInner title={t('title')} text={t('subtitle')} />
      <section className="tj-post-area section-space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="tj-post-wrapper">
                <article className="tj-post-item">
                  <div className="tj-post-content">
                    <h2 className="mb-4">{t('section_1_title')}</h2>
                    <p>{t('section_1_content')}</p>

                    <h3 className="mt-5 mb-3">{t('section_2_title')}</h3>
                    <p>{t('section_2_content')}</p>

                    <h3 className="mt-5 mb-3">{t('section_3_title')}</h3>
                    <p>{t('section_3_content')}</p>

                    <h3 className="mt-5 mb-3">{t('section_4_title')}</h3>
                    <p>{t('section_4_content')}</p>

                    <h3 className="mt-5 mb-3">{t('section_5_title')}</h3>
                    <p>{t('section_5_content')}</p>

                    <h3 className="mt-5 mb-3">{t('section_6_title')}</h3>
                    <p>{t('section_6_content')}</p>

                    <p className="mt-5 mb-0">
                      <strong>{t('last_updated')}</strong>
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsConditionsMain;
