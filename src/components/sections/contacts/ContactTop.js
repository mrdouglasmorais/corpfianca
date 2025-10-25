'use client';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const ContactTop = () => {
  const t = useTranslations('contact_page');
  const locale = useLocale();

  return (
    <section className="tj-contact-area section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                {t('contact_us')}
              </span>
              <h2 className="sec-title text-anim">{t('our_contact_info')}</h2>
            </div>
          </div>
        </div>
        <div className="row rg-30">
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="contact-item style-2 wow fadeInUp" data-wow-delay="0.1s">
              <div className="contact-icon">
                <i className="tji-email"></i>
              </div>
              <h3 className="contact-title">{t('email_us')}</h3>
              <ul className="contact-list">
                <li>
                  <Link href="mailto:contato@corpfianca.com">contato@corpfianca.com</Link>
                </li>
                <li>
                  <Link href="mailto:suporte@corpfianca.com">suporte@corpfianca.com</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="contact-item style-2 wow fadeInUp" data-wow-delay="0.3s">
              <div className="contact-icon">
                <i className="tji-phone"></i>
              </div>
              <h3 className="contact-title">{t('call_us')}</h3>
              <ul className="contact-list">
                <li>
                  <Link href="mailto:contato@corpfianca.com">contato@corpfianca.com</Link>
                </li>
                <li>
                  <Link href="mailto:suporte@corpfianca.com">suporte@corpfianca.com</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="contact-item style-2 wow fadeInUp" data-wow-delay="0.5s">
              <div className="contact-icon">
                <i className="tji-location"></i>
              </div>
              <h3 className="contact-title">{t('our_location')}</h3>
              <p>{t('address')}</p>
              <p className="cnpj-text">{t('cnpj')}</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="contact-item style-2 wow fadeInUp" data-wow-delay="0.7s">
              <div className="contact-icon">
                <i className="tji-chat"></i>
              </div>
              <h3 className="contact-title">{t('live_chat')}</h3>
              <ul className="contact-list">
                <li>
                  <Link href="mailto:atendimento@corpfianca.com">atendimento@corpfianca.com</Link>
                </li>
                <li className="active">
                  <Link href={createLocalizedPath('/contact', locale)}>{t('need_help')}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTop;
