'use client';
import { createLocalizedPath } from '@/utils/pathUtils';
import { getServiceSlug } from '@/utils/slugUtils';
import getLocalizedServiceContent from '@/utils/serviceContent';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const ServiceCard4 = ({ service, idx, lastItem }) => {
  const locale = useLocale();
  const { title, desc, id, totalProject, iconName, img, bgImg, svg } = service || {};
  const slug = getServiceSlug(service);
  const { title: localizedTitle } = getLocalizedServiceContent(service, locale);
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
          <Link href={createLocalizedPath(`/services/${slug}`, locale)}>
            {localizedTitle || title}
          </Link>
        </h4>
        <Link className="service-button" href={createLocalizedPath(`/services/${slug}`, locale)}>
          <i className="tji-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard4;
