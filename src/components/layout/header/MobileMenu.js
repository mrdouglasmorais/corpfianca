'use client';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const MobileMenu = () => {
  const t = useTranslations('mobile_menu');

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
                placeholder={t('search_placeholder')}
              />
            </form>
          </div>

          <div className="hamburger_language" style={{ display: 'block', width: '100%' }}>
            <LanguageSwitcher />
          </div>

          <div className="hamburger_menu">
            <div className="mobile_menu"></div>
          </div>

          <div className="hamburger-infos">
            <h4 className="hamburger-title">{t('contact_info')}</h4>
            <div className="contact-info">
              <div className="contact_item">
                <span className="subtitle">{t('email')}</span>
                <div className="text">
                  <Link className="link" href="mailto:suporte@corpfianca.com">
                    suporte@corpfianca.com
                  </Link>
                </div>
              </div>
              <div className="contact_item">
                <span className="subtitle">{t('phone')}</span>
                <div className="text">
                  <Link className="link" href="tel:000123456789">
                    (11) 0000-0000
                  </Link>
                </div>
              </div>
              <div className="contact_item">
                <span className="subtitle">{t('location')}</span>
                <div className="text">{t('location_address')}</div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h4 className="hamburger-title">{t('follow_us')}</h4>
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
