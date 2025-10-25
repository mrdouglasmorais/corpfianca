'use client';
import { useTranslations } from 'next-intl';

const PasswordPrimary = () => {
  const t = useTranslations('auth');

  return (
    <section className="full-width tj-page__area section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tj-page__container">
              <div className="tj-entry__content">
                <div className="woocommerce">
                  <div className="woo-lost-password">
                    <h3>{t('forgot_password')}</h3>
                    <p>{t('forgot_password_desc')}</p>

                    <form method="post" className="woocommerce-ResetPassword lost_reset_password">
                      <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                        <label htmlFor="user_login">
                          {t('username_or_email_short')}&nbsp;
                          <span className="required" aria-hidden="true">
                            *
                          </span>
                        </label>
                        <input
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          type="text"
                          name="user_login"
                          id="user_login"
                          autoComplete="username"
                          required=""
                          aria-required="true"
                        />
                      </p>

                      <div className="clear"></div>

                      <p className="woocommerce-form-row form-row">
                        <input type="hidden" name="wc_reset_password" defaultValue="true" />
                        <button
                          type="submit"
                          className="woocommerce-Button button"
                          defaultValue="Reset password"
                        >
                          <span className="btn-text">
                            <span>{t('reset_password')}</span>
                          </span>
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordPrimary;
