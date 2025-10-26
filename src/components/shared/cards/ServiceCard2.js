'use client';
import modifyNumber from '@/libs/modifyNumber';
import { createLocalizedPath } from '@/utils/pathUtils';
import { getServiceSlug } from '@/utils/slugUtils';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

const ServiceCard2 = ({ service, idx, lastItem }) => {
  const locale = useLocale();
  const tNav = useTranslations('navigation');
  const tCommon = useTranslations('common');
  const { title, desc, id, totalProject, iconName, img, bgImg, svg } = service || {};
  const slug = getServiceSlug(service);
  const translateServiceTitle = (serviceTitle, serviceId) => {
    const titleMap = {
      1: tNav('traditional_bonds'),
      2: tNav('corporate_bonds'),
      3: tNav('structured_bonds'),
      4: tNav('judicial_bonds'),
      5: tNav('credit_bonds'),
      6: tNav('rental_bonds'),
    };
    return titleMap[serviceId] || serviceTitle;
  };
  const translatedTitle = translateServiceTitle(title, id);
  return (
    <div className="service-style-2">
      <div className="service-icon">
        <i className={iconName ? iconName : 'tji-optimization'}></i>
      </div>
      <div className="service-content">
        <span className="number">{modifyNumber(id)}</span>
        <h4 className="title">
          <Link href={createLocalizedPath(`/services/${slug}`, locale)}>{translatedTitle}</Link>
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
          {tCommon('learn_more')} <i className="tji-arrow-right"></i>
        </Link>
      </div>
      <div className="thumb">
        <img src={bgImg ? bgImg : '/images/service/h1-service-1.webp'} alt="image" />
      </div>
    </div>
  );
};

export default ServiceCard2;
