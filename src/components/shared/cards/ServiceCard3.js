'use client';
import modifyNumber from '@/libs/modifyNumber';
import { createLocalizedPath } from '@/utils/pathUtils';
import { getServiceSlug } from '@/utils/slugUtils';
import getLocalizedServiceContent from '@/utils/serviceContent';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const ServiceCard3 = ({ service, idx, lastItem }) => {
  const locale = useLocale();
  const { title, desc, id, totalProject, iconName, img, bgImg2, svg } = service || {};
  const slug = getServiceSlug(service);
  const { title: localizedTitle, cardSummary } = getLocalizedServiceContent(service, locale);
  const description =
    cardSummary ||
    (desc && desc.includes("In today's dynamic business environment")
      ? ''
      : desc) ||
    '';
  return (
    <div className="service-style-3 wow fadeInUp" data-wow-delay={`0.${idx + 1 + idx}s`}>
      <div className="service-image" style={{ backgroundImage: `url('${bgImg2}')` }}></div>
      <div className="service-title">
        <h4 className="title">
          <span>{modifyNumber(idx + 1)}.</span>
          <Link href={createLocalizedPath(`/services/${slug}`, locale)}>
            {localizedTitle || title}
          </Link>
        </h4>
      </div>
      <div className="desc">
        <p>{description}</p>

        <div className="service-button d-lg-none">
          <Link href={createLocalizedPath(`/services/${slug}`, locale)} className="text-btn">
            Learn more <i className="tji-angle-right"></i>
          </Link>
        </div>
      </div>
      <div className="service-button d-none d-lg-inline-block">
        <Link href={createLocalizedPath(`/services/${slug}`, locale)} className="text-btn">
          Learn more <i className="tji-angle-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard3;
