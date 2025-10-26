'use client';
import { useLocale } from 'next-intl';
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import { createLocalizedPath } from '@/utils/pathUtils';

const ServiceCard8 = ({ service, idx, lastItem }) => {
	const locale = useLocale();
	const { title, id, iconName, img } = service || {};
	return (
		<div className="service_item wow fadeInUp" data-wow-delay={`0.${idx + 3}s`}>
			<span className="no">{modifyNumber(idx + 1)}.</span>
			<div className="content">
				<h4 className="title">
					<Link href={createLocalizedPath(`/services/${id}`, locale)}>{title}</Link>
				</h4>
				<div className="desc">
					In today's dynamic business environment, the key to success lies
					strategics our planning and operational business.
				</div>
			</div>
			<Link className="service_btn icon-btn" href={createLocalizedPath(`/services/${id}`, locale)}>
				<i className="tji-arrow-right"></i>
			</Link>
		</div>
	);
};

export default ServiceCard8;
