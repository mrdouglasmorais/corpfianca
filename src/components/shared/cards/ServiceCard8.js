'use client';
import modifyNumber from '@/libs/modifyNumber';
import { createLocalizedPath } from '@/utils/pathUtils';
import { getServiceSlug } from '@/utils/slugUtils';
import getLocalizedServiceContent from '@/utils/serviceContent';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const ServiceCard8 = ({ service, idx, lastItem }) => {
  const locale = useLocale();
  const { title, id, iconName, img, desc } = service || {};
  const slug = getServiceSlug(service);
  const { title: localizedTitle, cardSummary } = getLocalizedServiceContent(service, locale);
  const description =
    cardSummary ||
    (desc && desc.includes("In today's dynamic business environment") ? '' : desc) ||
    '';
  return (
    <div className="service_item wow fadeInUp" data-wow-delay={`0.${idx + 3}s`}>
      <span className="no">{modifyNumber(idx + 1)}.</span>
      <div className="content">
        <h4 className="title">
          <Link href={createLocalizedPath(`/services/${slug}`, locale)}>
            {localizedTitle || title}
          </Link>
        </h4>
        <div className="desc">
          {description}
        </div>
      </div>
      <Link className="service_btn icon-btn" href={createLocalizedPath(`/services/${slug}`, locale)}>
        <i className="tji-arrow-right"></i>
      </Link>
    </div>
  );
};

export default ServiceCard8;
