'use client';
import BrandSlider1 from '@/components/shared/brands/BrandSlider1';
import BackToTop from '@/components/shared/others/BackToTop';
import getALlServices from '@/libs/getALlServices';
import { createLocalizedPath } from '@/utils/pathUtils';
import { getServiceSlug } from '@/utils/slugUtils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const Footer = ({ footerType, isRtl }) => {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const locale = useLocale();
  const services = getALlServices();
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
                      <Link href={createLocalizedPath('/about', locale)}>{tNav('about_us')}</Link>
                    </li>
                    <li>
                      <Link href={createLocalizedPath('/faq', locale)}>{tNav('faq')}</Link>
                    </li>
                    <li>
                      <Link href={createLocalizedPath('/register', locale)}>
                        {tNav('register')}
                      </Link>
                    </li>
                    <li>
                      <Link href={createLocalizedPath('/login', locale)}>{tNav('login')}</Link>
                    </li>
                    <li>
                      <Link href={createLocalizedPath('/noticias', locale)}>{tNav('blog')}</Link>
                    </li>
                    <li>
                      <Link href={createLocalizedPath('/contact', locale)}>{tNav('contact')}</Link>
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
                    {services.slice(0, 6).map((service, idx) => {
                      const translationKeys = [
                        'traditional_bonds',
                        'corporate_bonds',
                        'structured_bonds',
                        'judicial_bonds',
                        'credit_bonds',
                        'rental_bonds',
                      ];
                      return (
                        <li key={idx}>
                          <Link
                            href={createLocalizedPath(
                              `/services/${getServiceSlug(service)}`,
                              locale,
                            )}
                          >
                            {tNav(translationKeys[idx])}
                          </Link>
                        </li>
                      );
                    })}
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
                      Corp Fiança{' '}
                    </Link>{' '}
                    {t('all_rights_reserved')}. {t('technology_by')}{' '}
                    <Link
                      href="https://habitvs.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="habitvs-link"
                    >
                      <img src="/images/logos/habitvs.png" alt="habitvs" className="habitvs-logo" />
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
                      <Link href={createLocalizedPath('/privacy-policy', locale)}>
                        {t('policy_privacy')}
                      </Link>
                    </li>
                    <li>
                      <Link href={createLocalizedPath('/termos-e-condicoes', locale)}>
                        {t('terms_conditions')}
                      </Link>
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
