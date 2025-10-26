'use client';
import { useTranslations } from 'next-intl';

const ButtonMenuToggler = ({ isMobile, type, headerType }) => {
  const t = useTranslations('header');

  return (
    <>
      {type ? (
        <button className={`menu_btn ${isMobile ? 'd-lg-none' : ''}`}>
          <span className="line">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      ) : (
        <button
          className={`menu_btn ${
            isMobile
              ? 'd-lg-none'
              : headerType === 3 || headerType == 4 || headerType == 6
                ? 'd-none d-xl-inline-flex'
                : ''
          }`}
        >
          {t('menu')}
          <span className="cubes">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      )}
    </>
  );
};

export default ButtonMenuToggler;
