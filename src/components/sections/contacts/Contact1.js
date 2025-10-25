'use client';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import FormSelect from '@/components/shared/Inputs/FormSelect';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useMemo } from 'react';

const Contact1 = () => {
  const t = useTranslations('contact_page');
  const locale = useLocale();

  const selectOptions = useMemo(
    () => [
      { value: '1', name: t('chose_option') },
      { value: '2', name: t('it_consulting') },
      { value: '3', name: t('market_research') },
      { value: '4', name: t('business_process') },
      { value: '5', name: t('business_consultancy') },
      { value: '6', name: t('digital_marketing') },
      { value: '7', name: t('branding_design') },
    ],
    [t],
  );

  return (
    <section
      className="tj-contact-section"
      style={{ backgroundImage: "url('/images/shapes/contact-bg.png')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-wrapper">
              <div className="contact-left-content">
                <div className="sec-heading style-2">
                  <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                    // {t('meet_team')}
                  </span>
                  <h2 className="sec-title text-anim">{t('discuss_further')}</h2>
                  <div className="desc wow fadeInUp" data-wow-delay="0.3s">
                    <p>{t('mission_description')}</p>
                  </div>
                  <div className="contact-button wow fadeInUp" data-wow-delay="0.5s">
                    <ButtonPrimary
                      text={t('contact_us')}
                      url={createLocalizedPath('/contact', locale)}
                      className={'white-btn'}
                    />
                  </div>
                </div>
              </div>
              <div className="contact-form-one wow fadeInUp" data-wow-delay="0.1s">
                <h3 className="title">
                  {t('feel_free_touch')} <span>{t('get_in_touch')}</span> {t('or_visit_location')}
                </h3>
                <div className="contact-item">
                  <div className="contact-text">
                    <i className="fa-solid fa-envelope"></i>
                    <Link href="mailto:suporte@corpfianca.com">suporte@corpfianca.com</Link>
                  </div>
                  <div className="contact-text">
                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                    {t('address')}
                  </div>
                </div>
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-input">
                        <input
                          type="text"
                          id="first"
                          name="name"
                          placeholder={t('full_name')}
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-input">
                        <input
                          type="email"
                          id="emailOne"
                          name="email"
                          placeholder={t('email_address')}
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-input">
                        <input
                          type="tel"
                          id="tel"
                          name="tel"
                          placeholder={t('phone_number')}
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-input">
                        <div className="tj-nice-select-box">
                          <div className="tj-select">
                            <FormSelect
                              id={'contact'}
                              className="nice-select"
                              defaultValue={t('chose_option')}
                              items={selectOptions}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-input input-textarea">
                        <textarea id="message" name="message" placeholder={t('type_message')} />
                      </div>
                    </div>
                    <div className="submit-button">
                      <ButtonPrimary
                        text={t('send_message')}
                        type="submit"
                        className={'white-btn'}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact1;
