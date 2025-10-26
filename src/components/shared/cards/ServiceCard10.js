'use client';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { getServiceSlug } from '@/utils/slugUtils';
import Link from 'next/link';

const ServiceCard10 = ({ service, idx, lastItem }) => {
  const locale = useLocale();
  const tNav = useTranslations('navigation');
  const { title, desc, iconName, id, totalProject, img, svg } = service || {};
  const slug = getServiceSlug(service);
  const translateServiceTitle = (serviceTitle, serviceId) => {    const titleMap = {      1: tNav('traditional_bonds'),      2: tNav('corporate_bonds'),      3: tNav('structured_bonds'),      4: tNav('judicial_bonds'),      5: tNav('credit_bonds'),      6: tNav('rental_bonds'),    };    return titleMap[serviceId] || serviceTitle;  };  const translatedTitle = translateServiceTitle(title, id);
  return (
    <div className="h10-service-item wow fadeInUp" data-wow-delay=".3s">
      <div className="service-content-wrap">
        <div className="service-title">
          <div className="service-icon">
            <i className={iconName ? iconName : 'tji-optimization'}></i>
          </div>
          <h4 className="title">
            <Link href={createLocalizedPath(`/services/${slug}`, locale)}>{translatedTitle}</Link>
          </h4>
        </div>
        <div className="service-content">
          <p className="desc">
            In today's dynamic business environment, the key to success lies strategics our planning
            and operational business.
          </p>
        </div>
        <div className="service-btn">
          <Link className="text-btn-2" href={createLocalizedPath(`/services/${slug}`, locale)}>
            <span className="icon">
              <i className="tji-angle-right"></i>
            </span>
            <span className="text">Learn more</span>
            <span className="icon">
              <i className="tji-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
      <div
        className="service-reveal-bg"
        style={{
          backgroundImage: `url('${img ? img : '/images/service/h1-service-1.webp'}')`,
        }}
      ></div>
    </div>
  );
};

export default ServiceCard10;
