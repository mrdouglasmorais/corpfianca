'use client';
import { createLocalizedPath } from '@/utils/pathUtils';
import { useLocale } from 'next-intl';
import { getServiceSlug } from '@/utils/slugUtils';
import Link from 'next/link';

const ServiceCard7 = ({ service, idx, lastItem }) => {
  const locale = useLocale();
  const { title, id, iconName, img } = service || {};
  const slug = getServiceSlug(service);
  return (
    <div className="service-style-3 wow fadeInUp" data-wow-delay="0.1s">
      <div className="service-title">
        <div className="service-icon">
          <span>
            <i className={iconName ? iconName : 'tji-optimization'}></i>
          </span>
        </div>
        <h4 className="title">
          <Link href={createLocalizedPath(`/services/${slug}`, locale)}>{title}</Link>
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
