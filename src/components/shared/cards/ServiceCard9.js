'use client';
import modifyNumber from '@/libs/modifyNumber';
import { useTranslations } from 'next-intl';
import { createLocalizedPath } from '@/utils/pathUtils';
import { getServiceSlug } from '@/utils/slugUtils';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const ServiceCard9 = ({ service, idx, lastItem }) => {
  const locale = useLocale();
  const tNav = useTranslations('navigation');
  const { title, id, iconName, img } = service || {};
  const slug = getServiceSlug(service);
  const translateServiceTitle = (serviceTitle, serviceId) => {    const titleMap = {      1: tNav('traditional_bonds'),      2: tNav('corporate_bonds'),      3: tNav('structured_bonds'),      4: tNav('judicial_bonds'),      5: tNav('credit_bonds'),      6: tNav('rental_bonds'),    };    return titleMap[serviceId] || serviceTitle;  };  const translatedTitle = translateServiceTitle(title, id);
  return (
    <div className="h9-services-item">
      <div className="h9-services-item-inner">
        <div className="service-icon">
          <i className={iconName ? iconName : 'tji-optimization'}></i>
        </div>
        <span className="number">{modifyNumber(idx + 1)}.</span>
        <div className="service-content">
          <h4 className="title">
            <Link href={createLocalizedPath(`/services/${slug}`, locale)}>{translatedTitle}</Link>
          </h4>
          <div className="check-list-one">
            <ul>
              <li>
                <i className="tji-double-check"></i>Expertise and experience
              </li>
              <li>
                <i className="tji-double-check"></i>Client Centric approach
              </li>
              <li>
                <i className="tji-double-check"></i>Commitment excellences
              </li>
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
