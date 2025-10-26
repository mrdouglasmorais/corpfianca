'use client';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { getServiceSlug } from '@/utils/slugUtils';
import Link from 'next/link';

const ServiceCard6 = ({ service, idx, lastItem }) => {
  const locale = useLocale();
  const tNav = useTranslations('navigation');
  const { title, id, iconName, img } = service || {};
  const slug = getServiceSlug(service);
  const translateServiceTitle = (serviceTitle, serviceId) => {    const titleMap = {      1: tNav('traditional_bonds'),      2: tNav('corporate_bonds'),      3: tNav('structured_bonds'),      4: tNav('judicial_bonds'),      5: tNav('credit_bonds'),      6: tNav('rental_bonds'),    };    return titleMap[serviceId] || serviceTitle;  };  const translatedTitle = translateServiceTitle(title, id);
  return (
    <div
      className="h6-services-item-inner"
      style={{
        backgroundImage: `url('${img ? img : '/images/service/h1-service-1.webp'}')`,
      }}
    >
      <div className="service_shape"></div>

      <div className="service_icon">
        <i className={iconName ? iconName : 'tji-optimization'}></i>
      </div>

      <div className="service_content">
        <h4 className="title">
          <Link href={createLocalizedPath(`/services/${slug}`, locale)}>{translatedTitle}</Link>
        </h4>

        <Link
          className="icon-btn-2 service_btn"
          href={createLocalizedPath(`/services/${slug}`, locale)}
        >
          <span className="btn-icon">
            <i className="tji-arrow-right"></i>
          </span>
          <span className="btn-text">Learn more</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard6;
