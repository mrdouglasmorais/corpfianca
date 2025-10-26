'use client';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { getServiceSlug } from '@/utils/slugUtils';
import Link from 'next/link';

const ServiceCard7 = ({ service, idx, lastItem }) => {
  const locale = useLocale();
  const tNav = useTranslations('navigation');
  const { title, id, iconName, img } = service || {};
  const slug = getServiceSlug(service);
  const translateServiceTitle = (serviceTitle, serviceId) => {    const titleMap = {      1: tNav('traditional_bonds'),      2: tNav('corporate_bonds'),      3: tNav('structured_bonds'),      4: tNav('judicial_bonds'),      5: tNav('credit_bonds'),      6: tNav('rental_bonds'),    };    return titleMap[serviceId] || serviceTitle;  };  const translatedTitle = translateServiceTitle(title, id);
  return (
    <div className="service-style-3 wow fadeInUp" data-wow-delay="0.1s">
      <div className="service-title">
        <div className="service-icon">
          <span>
            <i className={iconName ? iconName : 'tji-optimization'}></i>
          </span>
        </div>
        <h4 className="title">
          <Link href={createLocalizedPath(`/services/${slug}`, locale)}>{translatedTitle}</Link>
        </h4>
      </div>
      <div className="service-right">
        <div className="desc">
          <p>
            In today's dynamic business environment, the key to success lies strategics our planning
            and operational business.
          </p>
        </div>
        <div className="service-button">
          <Link className="blog-btn-2" href={createLocalizedPath(`/services/${slug}`, locale)}>
            <span className="btn-icon">
              <i className="tji-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard7;
