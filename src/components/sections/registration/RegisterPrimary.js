'use client';
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import { createLocalizedPath } from '@/utils/pathUtils';

const RegisterPrimary = () => {
  const t = useTranslations('auth');
  const locale = useLocale();
  const [apiStatus, setApiStatus] = useState({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      newPassword: '',
      confirmPassword: '',
      terms: false,
    },
  });

  const benefits = [
    t('register_benefit_1'),
    t('register_benefit_2'),
    t('register_benefit_3'),
  ];

  const onSubmit = async (values) => {
    setApiStatus({ type: null, message: '' });

    const payload = {
      fullName: values.fullName.trim(),
      companyName: values.companyName.trim(),
      email: values.email.toLowerCase(),
      phone: values.phone.trim(),
      password: values.newPassword,
      locale,
    };

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL;
      if (apiBase) {
        await axios.post(`${apiBase}/auth/register`, payload);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setApiStatus({ type: 'success', message: t('register_success') });
      reset();
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        t('register_error');
      setApiStatus({ type: 'error', message });
    }
  };

  const renderError = (field) =>
    errors[field] ? (
      <p className="form-error-text" role="alert">
        {errors[field].message}
      </p>
    ) : null;

  return (
    <section className="full-width tj-page__area section-space">
      <div className="container">
        <div className="row gy-4 align-items-start">
          <div className="col-lg-7">
            <div className="tj-page__container">
              <div className="tj-entry__content">
                <div className="contact-form-one style-2 register-form wow fadeInUp" data-wow-delay="0.1s">
                  <h3 className="title">{t('register')}</h3>
                  <p className="register-intro">{t('register_subtitle')}</p>
                  <form className="register-form auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="row rg-15">
                      <div className="col-md-6">
                        <div className={`form-input ${errors.fullName ? 'has-error' : ''}`}>
                          <input
                            type="text"
                            id="full_name"
                            placeholder={`${t('full_name')}*`}
                            {...register('fullName', {
                              required: t('field_required'),
                              minLength: { value: 3, message: t('field_min_length') },
                            })}
                            aria-invalid={!!errors.fullName}
                          />
                        </div>
                        {renderError('fullName')}
                      </div>
                      <div className="col-md-6">
                        <div className={`form-input ${errors.companyName ? 'has-error' : ''}`}>
                          <input
                            type="text"
                            id="company_name"
                            placeholder={`${t('company_name')}*`}
                            {...register('companyName', {
                              required: t('field_required'),
                            })}
                            aria-invalid={!!errors.companyName}
                          />
                        </div>
                        {renderError('companyName')}
                      </div>
                      <div className="col-md-6">
                        <div className={`form-input ${errors.email ? 'has-error' : ''}`}>
                          <input
                            type="email"
                            id="email"
                            placeholder={`${t('work_email')}*`}
                            autoComplete="email"
                            {...register('email', {
                              required: t('field_required'),
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: t('invalid_email'),
                              },
                            })}
                            aria-invalid={!!errors.email}
                          />
                        </div>
                        {renderError('email')}
                      </div>
                      <div className="col-md-6">
                        <div className={`form-input ${errors.phone ? 'has-error' : ''}`}>
                          <input
                            type="tel"
                            id="phone"
                            placeholder={`${t('phone_number')}*`}
                            autoComplete="tel"
                            {...register('phone', {
                              required: t('field_required'),
                              minLength: { value: 8, message: t('field_min_length') },
                            })}
                            aria-invalid={!!errors.phone}
                          />
                        </div>
                        {renderError('phone')}
                      </div>
                      <div className="col-md-6">
                        <div className={`form-input ${errors.newPassword ? 'has-error' : ''}`}>
                          <input
                            type="password"
                            id="new_password"
                            placeholder={`${t('choose_password')}*`}
                            autoComplete="new-password"
                            {...register('newPassword', {
                              required: t('field_required'),
                              minLength: { value: 8, message: t('password_hint') },
                            })}
                            aria-invalid={!!errors.newPassword}
                          />
                        </div>
                        {renderError('newPassword')}
                      </div>
                      <div className="col-md-6">
                        <div className={`form-input ${errors.confirmPassword ? 'has-error' : ''}`}>
                          <input
                            type="password"
                            id="confirm_password"
                            placeholder={`${t('confirm_password')}*`}
                            autoComplete="new-password"
                            {...register('confirmPassword', {
                              required: t('field_required'),
                              validate: (value) =>
                                value === watch('newPassword') || t('password_mismatch'),
                            })}
                            aria-invalid={!!errors.confirmPassword}
                          />
                        </div>
                        {renderError('confirmPassword')}
                      </div>
                    </div>

                    <p className="password-hint">{t('password_hint')}</p>

                    <div className="form-checkbox">
                      <label className={`${errors.terms ? 'has-error' : ''}`}>
                        <input
                          type="checkbox"
                          {...register('terms', { required: t('field_required') })}
                        />{' '}
                        <span>
                          {t('accept_terms')}{' '}
                          <Link href={createLocalizedPath('/privacy-policy', locale)}>
                            {t('privacy_policy_link')}
                          </Link>{' '}
                          {t('and')}{' '}
                          <Link href={createLocalizedPath('/termos-e-condicoes', locale)}>
                            {t('terms_link')}
                          </Link>
                        </span>
                      </label>
                      {renderError('terms')}
                    </div>

                    {apiStatus.message && (
                      <div
                        className={`form-status-message ${
                          apiStatus.type === 'error' ? 'error' : 'success'
                        }`}
                        role="status"
                      >
                        {apiStatus.message}
                      </div>
                    )}

                    <div className="row align-items-center rg-15">
                      <div className="col-sm-6">
                        <ButtonPrimary
                          type="submit"
                          className="w-100 register-submit"
                          text={isSubmitting ? t('processing') : t('create_account')}
                          disabled={isSubmitting}
                        />
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
