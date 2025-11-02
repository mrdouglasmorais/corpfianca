'use client';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import FormSelect from '@/components/shared/Inputs/FormSelect';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

const QuoteForm = () => {
  const t = useTranslations('quote_page');

  const bondTypeOptions = useMemo(
    () => [
      { value: '1', name: t('select_bond_type') },
      { value: '2', name: t('traditional_bonds') },
      { value: '3', name: t('corporate_bonds') },
      { value: '4', name: t('structured_bonds') },
      { value: '5', name: t('judicial_bonds') },
      { value: '6', name: t('credit_bonds') },
      { value: '7', name: t('rental_bonds') },
    ],
    [t],
  );

  const companySizeOptions = useMemo(
    () => [
      { value: '1', name: t('select_company_size') },
      { value: '2', name: t('micro_enterprise') },
      { value: '3', name: t('small_enterprise') },
      { value: '4', name: t('medium_enterprise') },
      { value: '5', name: t('large_enterprise') },
    ],
    [t],
  );

  return (
    <section className="tj-contact-area section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                {t('quote_subtitle')}
              </span>
              <h2 className="sec-title text-anim">{t('quote_title')}</h2>
              <p className="sec-desc">{t('quote_description')}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form-one style-2 wow fadeInUp" data-wow-delay="0.1s" style={{ margin: '0 auto' }}>
              <form action="#">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input
                        type="text"
                        id="company_name"
                        name="company_name"
                        placeholder={t('company_name')}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input
                        type="text"
                        id="cnpj"
                        name="cnpj"
                        placeholder={t('cnpj')}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input
                        type="text"
                        id="contact_name"
                        name="contact_name"
                        placeholder={t('contact_name')}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input
                        type="email"
                        id="email"
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
                        id="phone"
                        name="phone"
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
                            id={'bond_type'}
                            className="nice-select"
                            defaultValue={t('select_bond_type')}
                            items={bondTypeOptions}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <div className="tj-nice-select-box">
                        <div className="tj-select">
                          <FormSelect
                            id={'company_size'}
                            className="nice-select"
                            defaultValue={t('select_company_size')}
                            items={companySizeOptions}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input
                        type="text"
                        id="bond_value"
                        name="bond_value"
                        placeholder={t('bond_value')}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-input input-textarea">
                      <textarea
                        id="additional_info"
                        name="additional_info"
                        placeholder={t('additional_info')}
                      ></textarea>
                    </div>
                  </div>
                  <div className="submit-button">
                    <ButtonPrimary text={t('request_quote')} type="submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;

