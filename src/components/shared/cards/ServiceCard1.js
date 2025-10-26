'use client';
import { createLocalizedPath } from '@/utils/pathUtils';
import { getServiceSlug } from '@/utils/slugUtils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import ButtonPrimary from '../buttons/ButtonPrimary';

const ServiceCard1 = ({ service, idx, lastItem }) => {
  const t = useTranslations('services_section');
  const tNav = useTranslations('navigation');
  const locale = useLocale();
  const { title, desc, id, totalProject, img, svg } = service || {};
  const slug = getServiceSlug(service);

  // Função para traduzir títulos de serviços
  const translateServiceTitle = (serviceTitle) => {
    const titleMap = {
      'Fianças Tradicionais': tNav('traditional_bonds'),
      'Fianças Corporativas': tNav('corporate_bonds'),
      'Fianças Estruturadas': tNav('structured_bonds'),
      'Fianças Judicial': tNav('judicial_bonds'),
      'Fianças de Crédito': tNav('credit_bonds'),
      'Fianças Locatícia': tNav('rental_bonds'),
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
            <Link href={createLocalizedPath(`/services/${slug}`, locale)}>{translatedTitle}</Link>
          </h3>
          <div className="desc">
            <p>{translatedDesc}</p>
          </div>
          <ButtonPrimary
            text={t('get_started')}
            url={createLocalizedPath(`/services/${slug}`, locale)}
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
