'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import ButtonPrimary from '../buttons/ButtonPrimary';

const ServiceCard1 = ({ service, idx, lastItem }) => {
  const t = useTranslations('services_section');
  const { title, desc, id, totalProject, img, svg } = service || {};
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
            <Link href={`/services/${id}`}>{title}</Link>
          </h3>
          <div className="desc">
            <p>{desc}</p>
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
