'use client';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import FormSelect from '@/components/shared/Inputs/FormSelect';
import { sendContactEmail } from '@/utils/sendEmail';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import Swal from 'sweetalert2';

const Contact3 = () => {
  const t = useTranslations('contact_page');
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const name = formData.get('name') || e.target.querySelector('input[placeholder*="name" i], input[placeholder*="nome" i], input[placeholder*="nombre" i]')?.value;
    const email = formData.get('email') || e.target.querySelector('input[type="email"]')?.value;
    const phone = formData.get('phone') || e.target.querySelector('input[type="tel"]')?.value;
    const message = formData.get('message') || e.target.querySelector('textarea')?.value;

    // Get selected subject from FormSelect (the hidden select element)
    const subjectSelect = document.getElementById('contact');
    const selectedValue = subjectSelect?.value;
    const subject = selectedValue && selectedValue !== '1'
      ? selectOptions.find(opt => opt.value === selectedValue)?.name || t('chose_option')
      : t('chose_option');

    try {
      await sendContactEmail(
        {
          name,
          email,
          phone,
          subject,
          message,
        },
        locale
      );

      Swal.fire({
        icon: 'success',
        title: t('send_message'),
        text: locale === 'pt' ? 'Mensagem enviada com sucesso!' : locale === 'en' ? 'Message sent successfully!' : '¡Mensaje enviado con éxito!',
        confirmButtonText: locale === 'pt' ? 'OK' : locale === 'en' ? 'OK' : 'OK',
      });

      e.target.reset();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: locale === 'pt' ? 'Erro ao enviar mensagem. Tente novamente.' : locale === 'en' ? 'Error sending message. Please try again.' : 'Error al enviar mensaje. Intente nuevamente.',
        confirmButtonText: locale === 'pt' ? 'OK' : locale === 'en' ? 'OK' : 'OK',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <br />
                  <Link href="tel:08008800800" style={{ marginTop: '10px', display: 'block' }}>
                    <i className="tji-phone"></i>0800 880 0800
                  </Link>
                </h6>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className="col-12 col-lg-7 ">
              <form
                onSubmit={handleSubmit}
                className="contact-team-details__form wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="tj-input__wrapper">
                  <input className="tj-input" name="name" placeholder={t('full_name')} required />
                </div>
                <div className="tj-input__wrapper">
                  <input className="tj-input" type="email" name="email" placeholder={t('email_address')} required />
                </div>
                <div className="tj-input__wrapper">
                  <input className="tj-input" type="tel" name="phone" placeholder={t('phone_number')} />
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
                  <textarea className="tj-input" name="message" placeholder={t('type_message')} rows="6" required />
                </div>
                <div>
                  <ButtonPrimary
                    text={isSubmitting ? (locale === 'pt' ? 'Enviando...' : locale === 'en' ? 'Sending...' : 'Enviando...') : t('send_message')}
                    type={'submit'}
                    disabled={isSubmitting}
                  />
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
