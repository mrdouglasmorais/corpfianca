'use client';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useLocale, useTranslations } from 'next-intl';

const CtaSidebar = () => {
  const locale = useLocale();
  const t = useTranslations('navigation');
  return (
    <div
      className="tj-sidebar-cta"
      style={{
        backgroundImage: "url('/images/home-4/cta/fale-com-especialista.png')",
      }}
    >
      <div className="content">
        <div className="icon">
          <img src="/images/shapes/widget-cta-icon.png" alt="image" />
        </div>
        <h3>
          {t('need_help_title')} <br /> {t('need_help_subtitle')}
        </h3>
        <p>{t('mission_description')}</p>
      </div>
      <div className="cta-btn">
        <ButtonPrimary
          text={t('get_in_touch')}
          url={createLocalizedPath('/contact', locale)}
          className={'white-btn'}
        />

        <img className="shapes move-anim-2" src="/images/shapes/carrow.png" alt="shape" />
      </div>
    </div>
  );
};

export default CtaSidebar;
