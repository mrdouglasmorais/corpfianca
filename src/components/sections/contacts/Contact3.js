'use client';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import FormSelect from '@/components/shared/Inputs/FormSelect';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useMemo } from 'react';

const Contact3 = () => {
  const t = useTranslations('contact_page');

  const selectOptions = useMemo(
    () => [
      { value: '1', name: t('chose_option') },
      { value: '2', name: t('business_advertising') },
      { value: '3', name: t('social_media_marketing') },
      { value: '4', name: t('content_marketing') },
      { value: '5', name: t('email_marketing') },
    ],
    [t],
  );

  return (
    <section className="contact-team-details">
      <div className="container">
        <div className="contact-team-details__inner">
          <div className="row">
            {/* <!--  left --> */}
            <div className="col-12 col-lg-5 ">
              <div className="sec-heading style-2">
                <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                  // {t('contact_us_upper')}
                </span>
                <h2 className="sec-title text-anim">{t('discuss_further')}</h2>
                <p className="desc wow fadeInUp" data-wow-delay="0.3s">
                  {t('mission_description')}
                </p>
                <h6 className="contact-team-details__message wow fadeInUp" data-wow-delay="0.5s">
                  <Link href="mailto:contato@corpfianca.com">
                    {' '}
                    <i className="tji-chat"></i>contato@corpfianca.com
                  </Link>
                </h6>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className="col-12 col-lg-7 ">
              <form
                action="#0"
                className="contact-team-details__form wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="tj-input__wrapper">
                  <input className="tj-input" placeholder={t('full_name')} />
                </div>
                <div className="tj-input__wrapper">
                  <input className="tj-input" placeholder={t('email_address')} />
                </div>
                <div className="tj-input__wrapper">
                  <input className="tj-input" placeholder={t('phone_number')} />
                </div>
                <div className="tj-input__wrapper">
                  <FormSelect
                    id={'contact'}
                    className="nice-select tj-nice-select tj-input"
                    defaultValue={t('chose_option')}
                    items={selectOptions}
                  />
                </div>
                <div className="tj-input__wrapper tj-input__wrapper--message">
                  <textarea className="tj-input" placeholder={t('type_message')} rows="6" />
                </div>
                <div>
                  <ButtonPrimary text={t('send_message')} type={'submit'} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact3;
