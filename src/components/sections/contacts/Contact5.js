'use client';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import FormSelect from '@/components/shared/Inputs/FormSelect';
import { sendContactEmail } from '@/utils/sendEmail';
import { useLocale, useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import Swal from 'sweetalert2';

const Contact5 = () => {
  const t = useTranslations('contact_page');
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const tel = formData.get('tel');
    const message = formData.get('message');

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
          phone: tel,
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
    <section className="tj-contact-area section-bottom-space">
      <div className="container">
        <div className="row rg-50">
          {/* <!-- contact form --> */}
          <div className="col-lg-6">
            <div className="contact-form-one style-2 wow fadeInUp" data-wow-delay="0.1s">
              <h3 className="title text-anim">
                {t('feel_free_touch')} <span>{t('get_in_touch')}</span> {t('or_visit_location')}
              </h3>
              <form onSubmit={handleSubmit}>
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
                      <textarea
                        id="message"
                        name="message"
                        placeholder={t('type_message')}
                      ></textarea>
                    </div>
                  </div>
                  <div className="submit-button">
                    <ButtonPrimary
                      text={isSubmitting ? (locale === 'pt' ? 'Enviando...' : locale === 'en' ? 'Sending...' : 'Enviando...') : t('send_message')}
                      type="submit"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- contact map --> */}
          <div className="col-lg-6">
            <div className="google-map wow fadeInUp" data-wow-delay="0.3s">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.282834583682!2d-46.6781848238808!3d-23.5864732612324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5744e0ebff5b%3A0x769bf4a32f914782!2sAv.%20Brigadeiro%20Faria%20Lima%2C%201572%20-%20Jardim%20Paulistano%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001411-000!5e0!3m2!1spt-BR!2sbr!4v1742025261462!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact5;
