'use client';
import ButtonPrimary from '@/components/shared/buttons/ButtonPrimary';
import { sendContactEmail } from '@/utils/sendEmail';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import Swal from 'sweetalert2';

const ClaimForm = () => {
  const t = useTranslations('claim_page');
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    const companyName = formData.get('claim_company_name');
    const cnpj = formData.get('claim_cnpj');
    const contactName = formData.get('claim_contact_name');
    const email = formData.get('claim_email');
    const phone = formData.get('claim_phone');
    const bondNumber = formData.get('bond_number');
    const claimDate = formData.get('claim_date');
    const claimType = formData.get('claim_type');
    const description = formData.get('claim_description');
    const docs = formData.getAll('documents');

    const message = `
Empresa: ${companyName || '-'}
CNPJ: ${cnpj || '-'}
Contato: ${contactName || '-'}
Email: ${email || '-'}
Telefone: ${phone || '-'}
Número da garantia: ${bondNumber || '-'}
Data do evento: ${claimDate || '-'}
Tipo de sinistro: ${claimType || '-'}
Documentos enviados: ${docs?.length ? docs.map((f) => f?.name || '').join(', ') : 'Nenhum'}

Descrição:
${description || '-'}
    `.trim();

    try {
      await sendContactEmail(
        {
          name: contactName || companyName || 'Solicitação de sinistro',
          email,
          phone,
          subject: `[Sinistro] ${bondNumber || claimType || 'Solicitação'}`,
          message,
        },
        locale,
      );

      Swal.fire({
        icon: 'success',
        title: t('submit_claim'),
        text:
          locale === 'pt'
            ? 'Solicitação de sinistro enviada com sucesso!'
            : locale === 'en'
              ? 'Claim request sent successfully!'
              : '¡Solicitud de siniestro enviada con éxito!',
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
                {t('subtitle')}
              </span>
              <h2 className="sec-title text-anim">{t('title')}</h2>
              <p className="sec-desc">{t('description')}</p>
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
                        id="claim_company_name"
                        name="claim_company_name"
                        placeholder={t('company_name')}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input
                        type="text"
                        id="claim_cnpj"
                        name="claim_cnpj"
                        placeholder={t('cnpj')}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input
                        type="text"
                        id="claim_contact_name"
                        name="claim_contact_name"
                        placeholder={t('contact_name')}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input
                        type="email"
                        id="claim_email"
                        name="claim_email"
                        placeholder={t('email_address')}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input
                        type="tel"
                        id="claim_phone"
                        name="claim_phone"
                        placeholder={t('phone_number')}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input
                        type="text"
                        id="bond_number"
                        name="bond_number"
                        placeholder={t('bond_number')}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input
                        type="date"
                        id="claim_date"
                        name="claim_date"
                        placeholder={t('claim_date')}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input
                        type="text"
                        id="claim_type"
                        name="claim_type"
                        placeholder={t('claim_type')}
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-input input-textarea">
                      <textarea
                        id="claim_description"
                        name="claim_description"
                        placeholder={t('description_placeholder')}
                        rows="6"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-input">
                      <label style={{ marginBottom: '10px', display: 'block', fontWeight: '500' }}>
                        {t('attach_documents')}
                      </label>
                      <input
                        type="file"
                        id="documents"
                        name="documents"
                        multiple
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        style={{ padding: '10px' }}
                      />
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
                          : t('submit_claim')
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

export default ClaimForm;
