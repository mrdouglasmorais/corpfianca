'use client';
import modifyNumber from '@/libs/modifyNumber';
import { createLocalizedPath } from '@/utils/pathUtils';
import { getServiceSlug } from '@/utils/slugUtils';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const ServiceCard2 = ({ service, idx, lastItem }) => {
  const locale = useLocale();
  const { title, desc, id, totalProject, iconName, img, bgImg, svg } = service || {};
  const slug = getServiceSlug(service);
  return (
    <div className="service-style-2">
      <div className="service-icon">
        <i className={iconName ? iconName : 'tji-optimization'}></i>
      </div>
      <div className="service-content">
        <span className="number">{modifyNumber(id)}</span>
        <h4 className="title">
          <Link href={createLocalizedPath(`/services/${slug}`, locale)}>{title}</Link>
        </h4>
        <div className="desc">
          <p>
            In today's dynamic business environment, the key to success lies strategics our planning
            and operational business.
          </p>
        </div>
        <Link
          className="service-button text-btn"
          href={createLocalizedPath(`/services/${slug}`, locale)}
        >
          Get optimization <i className="tji-arrow-right"></i>
        </Link>
      </div>
      <div className="thumb">
        <img src={bgImg ? bgImg : '/images/service/h1-service-1.webp'} alt="image" />
      </div>
    </div>
  );
};

export default ServiceCard2;
