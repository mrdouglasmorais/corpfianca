'use client';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import ButtonPrimary from '../buttons/ButtonPrimary';

const ServiceCard1 = ({ service, idx, lastItem }) => {
  const t = useTranslations('services_section');
  const tNav = useTranslations('navigation');
  const locale = useLocale();
  const { title, desc, id, totalProject, img, svg } = service || {};

  // Função para traduzir títulos de serviços
  const translateServiceTitle = (serviceTitle) => {
    const titleMap = {
      'Business process optimization': tNav('business_process_optimization'),
      'Strategic planning & execution': tNav('strategic_planning_execution'),
      'Leadership executive coaching': tNav('leadership_executive_coaching'),
      'Legacy leadership institute': tNav('legacy_leadership_institute'),
      'Executive growth solutions': tNav('executive_growth_solutions'),
      'Empowered leadership journey': tNav('empowered_leadership_journey'),
    };
    return titleMap[serviceTitle] || serviceTitle;
  };

  // Traduzir descrição genérica
  const translatedDesc =
    desc && desc.includes("In today's dynamic business environment")
      ? t('service_desc_generic')
      : desc;

  const translatedTitle = translateServiceTitle(title);

  return (
    <div className={`service-item ${idx < lastItem ? 'service-stack' : ''}`}>
      <div className="service-content">
        <div className="service-number">
          <span className="active">1</span>
          <span>/{idx + 1}</span>
        </div>
        <div className="service-text">
          <div className="service-icons">
            <img src={svg ? svg : 'assets/images/icons/service-1.svg'} alt="Icons" />
          </div>
          <h3 className="title">
            <Link href={`/services/${id}`}>{translatedTitle}</Link>
          </h3>
          <div className="desc">
            <p>{translatedDesc}</p>
          </div>
          <ButtonPrimary
            text={t('get_started')}
            url={`/services/${id}`}
            className={'service-btn'}
          />
        </div>
      </div>
      <div className="service-images hover:shine">
        <img src={img ? img : '/images/service/h1-service-1.webp'} alt="Images" />
      </div>
    </div>
  );
};

export default ServiceCard1;
