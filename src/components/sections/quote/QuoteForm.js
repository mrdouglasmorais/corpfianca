'use client';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import FormSelect from '@/components/shared/Inputs/FormSelect';
import getALlServices from '@/libs/getALlServices';
import { sendContactEmail } from '@/utils/sendEmail';
import getLocalizedServiceContent from '@/utils/serviceContent';
import { useLocale, useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import Swal from 'sweetalert2';

const QuoteForm = () => {
  const t = useTranslations('quote_page');
  const locale = useLocale();
  const services = getALlServices();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bondTypeOptions = useMemo(
    () => [
      { value: '', name: t('select_bond_type') },
      ...services.map((service) => {
        const localizedTitle =
          getLocalizedServiceContent(service, locale).title || service.title || '';
        return { value: String(service.id), name: localizedTitle };
      }),
    ],
    [locale, services, t],
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const companyName = formData.get('company_name');
    const cnpj = formData.get('cnpj');
    const contactName = formData.get('contact_name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const bondValue = formData.get('bond_value');
    const additionalInfo = formData.get('additional_info');

    // FormSelect values
    const bondTypeSelect = document.getElementById('bond_type');
    const bondTypeValue = bondTypeSelect?.value;
    const bondType =
      bondTypeValue && bondTypeValue !== ''
        ? bondTypeOptions.find((opt) => opt.value === bondTypeValue)?.name || t('select_bond_type')
        : t('select_bond_type');

    const companySizeSelect = document.getElementById('company_size');
    const companySizeValue = companySizeSelect?.value;
    const companySize =
      companySizeValue && companySizeValue !== '1'
        ? companySizeOptions.find((opt) => opt.value === companySizeValue)?.name ||
          t('select_company_size')
        : t('select_company_size');

    const message = `
Empresa: ${companyName || '-'}
CNPJ: ${cnpj || '-'}
Contato: ${contactName || '-'}
Email: ${email || '-'}
Telefone: ${phone || '-'}
Tipo de garantia: ${bondType || '-'}
Porte da empresa: ${companySize || '-'}
Valor da garantia: ${bondValue || '-'}

Informações adicionais:
${additionalInfo || '-'}
    `.trim();

    try {
      await sendContactEmail(
        {
          name: contactName || companyName || 'Solicitação de cotação',
          email,
          phone,
          subject: `[Cotação] ${bondType || 'Solicitação'}`,
          message,
        },
        locale,
      );

      Swal.fire({
        icon: 'success',
        title: t('request_quote'),
        text:
          locale === 'pt'
            ? 'Solicitação de cotação enviada com sucesso!'
            : locale === 'en'
              ? 'Quote request sent successfully!'
              : '¡Solicitud de cotización enviada con éxito!',
      });

      e.target.reset();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text:
          locale === 'pt'
            ? 'Erro ao enviar solicitação. Tente novamente.'
            : locale === 'en'
              ? 'Error sending request. Please try again.'
              : 'Error al enviar la solicitud. Intente nuevamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <div
              className="contact-form-one style-2 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ margin: '0 auto' }}
            >
              <form onSubmit={handleSubmit}>
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
                    <ButtonPrimary
                      text={
                        isSubmitting
                          ? locale === 'pt'
                            ? 'Enviando...'
                            : locale === 'en'
                              ? 'Sending...'
                              : 'Enviando...'
                          : t('request_quote')
                      }
                      type="submit"
                      disabled={isSubmitting}
                    />
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
