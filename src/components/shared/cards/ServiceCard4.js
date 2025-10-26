'use client';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useTranslations } from 'next-intl';
import { getServiceSlug } from '@/utils/slugUtils';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const ServiceCard4 = ({ service, idx, lastItem }) => {
  const locale = useLocale();
  const tNav = useTranslations('navigation');
  const { title, desc, id, totalProject, iconName, img, bgImg, svg } = service || {};
  const slug = getServiceSlug(service);
  const translateServiceTitle = (serviceTitle, serviceId) => {    const titleMap = {      1: tNav('traditional_bonds'),      2: tNav('corporate_bonds'),      3: tNav('structured_bonds'),      4: tNav('judicial_bonds'),      5: tNav('credit_bonds'),      6: tNav('rental_bonds'),    };    return titleMap[serviceId] || serviceTitle;  };  const translatedTitle = translateServiceTitle(title, id);
  return (
    <div className="service-style-4">
      <div className="thumb">
        <img src={bgImg ? bgImg : '/images/service/h1-service-1.webp'} alt="image" />
      </div>
      <div className="service-icon">
        <span>
          <i className={iconName ? iconName : 'tji-optimization'}></i>
        </span>
      </div>
      <div className="service-content">
        <h4 className="title">
          <Link href={createLocalizedPath(`/services/${slug}`, locale)}>{translatedTitle}</Link>
        </h4>
        <Link className="service-button" href={createLocalizedPath(`/services/${slug}`, locale)}>
          <i className="tji-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard4;
