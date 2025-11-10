'use client';
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';

const LoginPrimary = () => {
  const t = useTranslations('auth');
  const [apiStatus, setApiStatus] = useState({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      username: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = async (values) => {
    setApiStatus({ type: null, message: '' });
    const payload = {
      username: values.username.trim(),
      password: values.password,
      remember: values.remember,
    };
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL;
      if (apiBase) {
        await axios.post(`${apiBase}/auth/login`, payload, { withCredentials: true });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      setApiStatus({ type: 'success', message: t('login_success') });
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        t('login_error');
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
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-9">
            <div className="tj-page__container">
              <div className="tj-entry__content">
                <div className="contact-form-one style-2 auth-login wow fadeInUp" data-wow-delay="0.1s">
                  <h3 className="title">{t('login')}</h3>
                  <form className="auth-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className={`form-input ${errors.username ? 'has-error' : ''}`}>
                      <input
                        type="text"
                        id="username"
                        placeholder={`${t('username_or_email')}*`}
                        autoComplete="username"
                        {...register('username', { required: t('field_required') })}
                        aria-invalid={!!errors.username}
                      />
                    </div>
                    {renderError('username')}

                    <div className={`form-input ${errors.password ? 'has-error' : ''}`}>
                      <input
                        type="password"
                        id="password"
                        placeholder={`${t('password_label')}*`}
                        autoComplete="current-password"
                        {...register('password', { required: t('field_required') })}
                        aria-invalid={!!errors.password}
                      />
                    </div>
                    {renderError('password')}

                    <div className="row align-items-center rg-15 form-checkbox-row">
                      <div className="col-6">
                        <label className="form-checkbox">
                          <input type="checkbox" {...register('remember')} />
                          <span>{t('remember_me')}</span>
                        </label>
                      </div>
                      <div className="col-6 text-end">
                        <Link className="lost_password" href="/password">
                          {t('lost_password')}
                        </Link>
                      </div>
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

                    <div className="submit-button mt-3">
                      <ButtonPrimary
                        type="submit"
                        text={isSubmitting ? t('processing') : t('log_in')}
                        className="w-100 justify-content-center"
                        disabled={isSubmitting}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPrimary;
