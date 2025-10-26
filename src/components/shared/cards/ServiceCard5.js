'use client';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { getServiceSlug } from '@/utils/slugUtils';
import Link from 'next/link';

const ServiceCard5 = ({ service, idx, lastItem, handleCurrentIndex, currentIndex }) => {
  const locale = useLocale();
  const tNav = useTranslations('navigation');
  const { title, desc, id, totalProject, iconName, img, bgImg, svg } = service || {};
  const slug = getServiceSlug(service);
  const translateServiceTitle = (serviceTitle, serviceId) => {    const titleMap = {      1: tNav('traditional_bonds'),      2: tNav('corporate_bonds'),      3: tNav('structured_bonds'),      4: tNav('judicial_bonds'),      5: tNav('credit_bonds'),      6: tNav('rental_bonds'),    };    return titleMap[serviceId] || serviceTitle;  };  const translatedTitle = translateServiceTitle(title, id);
  return (
    <div
      className={`service-style-5 ${currentIndex === idx ? 'active' : ''}`}
      onMouseEnter={() => handleCurrentIndex(idx)}
    >
      <div className="h5-service-content">
        <div className="h5-title-area">
          <h4 className="title">{translatedTitle}</h4>
        </div>
        <div className="service-icon">
          <span>
            <i className={iconName ? iconName : 'tji-optimization'}></i>
          </span>
        </div>
        <div className="h5-service-content-inner">
          <h4 className="title">
            <Link href={createLocalizedPath(`/services/${slug}`, locale)}>{translatedTitle}</Link>
          </h4>
          <div className="desc">
            <p>
              In today's dynamic business environment, the key to success lies strategics our
              planning and operational business.
            </p>
          </div>
        </div>
        <Link className="blog-btn-2" href={createLocalizedPath(`/services/${slug}`, locale)}>
          <span className="btn-icon">
            <i className="tji-arrow-right"></i>
          </span>
          <span className="btn-text">Learn more</span>
        </Link>
        <Link
          className="blog-btn-2 mobile-show"
          href={createLocalizedPath(`/services/${slug}`, locale)}
        >
          <span className="btn-icon">
            <i className="tji-arrow-right"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard5;
