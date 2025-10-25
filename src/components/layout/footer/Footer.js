'use client';
import BrandSlider1 from '@/components/shared/brands/BrandSlider1';
import BackToTop from '@/components/shared/others/BackToTop';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Footer = ({ footerType, isRtl }) => {
  const t = useTranslations('footer');
  return (
    <footer className="tj-footer-area footer-1">
      {/* <!-- start: Brand Section --> */}
      {footerType === 'inner' ? (
        ''
      ) : (
        <section className="tj-brand-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <BrandSlider1 isFooterRtl={isRtl} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* <!-- end: Brand Section --> */}

      <div className="footer-top-area fix">
        <div className="container">
          <div className="row rg-50 line">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget footer1-col-1 footer-contact-infos">
                <div className="footer-title">
                  <h4 className="title">{t('our_offices')}</h4>
                </div>
                <div className="infos-item">
                  <span>{t('headquarters')}</span>
                  <p>{t('address')}</p>
                  <p className="cnpj-text">{t('cnpj')}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget footer1-col-2 widget_nav_menu">
                <div className="footer-title">
                  <h4 className="title">{t('resources')}</h4>
                </div>
                <div className="widget-menu">
                  <ul>
                    <li>
                      <Link href="/contact">{t('contact_us')}</Link>
                    </li>
                    <li>
                      <Link href="/contact">{t('privacy_policy')}</Link>
                    </li>
                    <li>
                      <Link href="/about">{t('recognitions')}</Link>
                    </li>
                    <li>
                      <Link href="/careers">
                        {t('careers')} <span>{t('new')}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/noticias">{t('blog')}</Link>
                    </li>
                    <li>
                      <Link href="/team">{t('feedback')}</Link>
                    </li>
                    <li>
                      <Link href="/contact">{t('error_404')}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget footer1-col-3 widget_nav_menu">
                <div className="footer-title">
                  <h4 className="title">{t('services')}</h4>
                </div>
                <div className="widget-menu">
                  <ul>
                    <li>
                      <Link href="/services/1">{t('strategic_planning')}</Link>
                    </li>
                    <li>
                      <Link href="/services/2">{t('market_research')}</Link>
                    </li>
                    <li>
                      <Link href="/services/3">{t('business_process')}</Link>
                    </li>
                    <li>
                      <Link href="/services/4">{t('financial_management')}</Link>
                    </li>
                    <li>
                      <Link href="/services/5">{t('change_management')}</Link>
                    </li>
                    <li>
                      <Link href="/services/6">{t('it_consulting')}</Link>
                    </li>
                    <li>
                      <Link href="/services/1">{t('leadership')}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget footer1-col-4 footer-newsletter-form">
                <div className="newsletter-title">
                  <h3 className="title">{t('subscribe_newsletter')}</h3>
                </div>
                <div className="newsletter-form">
                  <form>
                    <div className="form-input">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={t('enter_email')}
                        required=""
                      />
                      <button className="tj-footer-input-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-content-area">
                <div className="copyright-text">
                  <p>
                    © 2025{' '}
                    <Link href="/" target="_blank">
                      {' '}
                      CorpFiança{' '}
                    </Link>{' '}
                    {t('all_rights_reserved')}. {t('technology_by')}{' '}
                    <Link href="https://habitvs.io" target="_blank" rel="noopener noreferrer">
                      {t('habitvs')}
                    </Link>
                  </p>
                </div>
                <div className="copyright-socails">
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
                      <Link href="https://x.com/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="copyright-menu">
                  <ul>
                    <li>
                      <Link href="contact">{t('policy_privacy')}</Link>
                    </li>
                    <li>
                      <Link href="contact">{t('terms_conditions')}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- start: back to top --> */}
      <BackToTop />
      {/* <!-- end: back to top --> */}
    </footer>
  );
};

export default Footer;
