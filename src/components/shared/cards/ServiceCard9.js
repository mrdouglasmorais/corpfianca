'use client';
import modifyNumber from '@/libs/modifyNumber';
import { createLocalizedPath } from '@/utils/pathUtils';
import { getServiceSlug } from '@/utils/slugUtils';
import getLocalizedServiceContent from '@/utils/serviceContent';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const ServiceCard9 = ({ service, idx, lastItem }) => {
  const locale = useLocale();
  const { title, id, iconName, img } = service || {};
  const slug = getServiceSlug(service);
  const { title: localizedTitle, highlights } = getLocalizedServiceContent(service, locale);
  const displayHighlights = (highlights && highlights.length ? highlights : []).slice(0, 3);
  return (
    <div className="h9-services-item">
      <div className="h9-services-item-inner">
        <div className="service-icon">
          <i className={iconName ? iconName : 'tji-optimization'}></i>
        </div>
        <span className="number">{modifyNumber(idx + 1)}.</span>
        <div className="service-content">
          <h4 className="title">
            <Link href={createLocalizedPath(`/services/${slug}`, locale)}>
              {localizedTitle || title}
            </Link>
          </h4>
          <div className="check-list-one">
            <ul>
              {displayHighlights.length
                ? displayHighlights.map((item, index) => (
                    <li key={index}>
                      <i className="tji-double-check"></i>
                      {item}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
      <Link className="service-btn" href={createLocalizedPath(`/services/${slug}`, locale)}>
        <span className=" text-btn">
          Learn more <i className="tji-angle-right"></i>
        </span>
      </Link>
    </div>
  );
};

export default ServiceCard9;
