'use client';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { createLocalizedPath } from '@/utils/pathUtils';

const RegisterPrimary = () => {
  const t = useTranslations('auth');
  const locale = useLocale();
  const benefits = [
    t('register_benefit_1'),
    t('register_benefit_2'),
    t('register_benefit_3'),
  ];

  return (
    <section className="full-width tj-page__area section-space">
      <div className="container">
        <div className="row gy-4 align-items-start">
          <div className="col-lg-7">
            <div className="tj-page__container">
              <div className="tj-entry__content">
                <div className="woocommerce">
                  <div className="woo-login-form">
                    <h3>{t('register')}</h3>
                    <p className="register-intro">{t('register_subtitle')}</p>
                    <form className="woocommerce-form register-form" method="post" noValidate="">
                      <div className="row rg-15">
                        <div className="col-md-6">
                          <p className="woocommerce-form-row form-row form-row-wide">
                            <label htmlFor="full_name">
                              {t('full_name')}&nbsp;
                              <span className="required" aria-hidden="true">
                                *
                              </span>
                            </label>
                            <input type="text" id="full_name" name="full_name" required="" />
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p className="woocommerce-form-row form-row form-row-wide">
                            <label htmlFor="company_name">
                              {t('company_name')}&nbsp;
                              <span className="required" aria-hidden="true">
                                *
                              </span>
                            </label>
                            <input type="text" id="company_name" name="company_name" required="" />
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p className="woocommerce-form-row form-row form-row-wide">
                            <label htmlFor="email">
                              {t('work_email')}&nbsp;
                              <span className="required" aria-hidden="true">
                                *
                              </span>
                            </label>
                            <input type="email" id="email" name="email" autoComplete="email" required="" />
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p className="woocommerce-form-row form-row form-row-wide">
                            <label htmlFor="phone">
                              {t('phone_number')}&nbsp;
                              <span className="required" aria-hidden="true">
                                *
                              </span>
                            </label>
                            <input type="tel" id="phone" name="phone" autoComplete="tel" required="" />
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p className="woocommerce-form-row form-row form-row-wide">
                            <label htmlFor="new_password">
                              {t('choose_password')}&nbsp;
                              <span className="required" aria-hidden="true">
                                *
                              </span>
                            </label>
                            <input
                              type="password"
                              id="new_password"
                              name="new_password"
                              autoComplete="new-password"
                              required=""
                            />
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p className="woocommerce-form-row form-row form-row-wide">
                            <label htmlFor="confirm_password">
                              {t('confirm_password')}&nbsp;
                              <span className="required" aria-hidden="true">
                                *
                              </span>
                            </label>
                            <input
                              type="password"
                              id="confirm_password"
                              name="confirm_password"
                              autoComplete="new-password"
                              required=""
                            />
                          </p>
                        </div>
                      </div>
                      <p className="password-hint">{t('password_hint')}</p>
                      <p className="woocommerce-form-row form-row">
                        <label className="woocommerce-form__label woocommerce-form__label-for-checkbox">
                          <input type="checkbox" name="terms" required="" />{' '}
                          <span>
                            {t('accept_terms')} <Link href={createLocalizedPath('/privacy-policy', locale)}>{t('privacy_policy_link')}</Link>{' '}
                            {t('and')}{' '}
                            <Link href={createLocalizedPath('/termos-e-condicoes', locale)}>{t('terms_link')}</Link>
                          </span>
                        </label>
                      </p>
                      <div className="row align-items-center rg-15">
                        <div className="col-sm-6">
                          <button type="submit" className="woocommerce-button button w-100">
                            <span className="btn-text">
                              <span>{t('create_account')}</span>
                            </span>
                          </button>
                        </div>
                        <div className="col-sm-6 text-sm-end">
                          <p className="already-have-account">
                            {t('have_account')}{' '}
                            <Link href={createLocalizedPath('/login', locale)}>{t('log_in')}</Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="tj-page__container register-benefits">
              <h4>{t('register_benefits_title')}</h4>
              <ul>
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <i className="tji-double-check"></i>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPrimary;
