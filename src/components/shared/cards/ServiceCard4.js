'use client';
import { useLocale } from 'next-intl';
import Link from "next/link";
import { createLocalizedPath } from '@/utils/pathUtils';

const ServiceCard4 = ({ service, idx, lastItem }) => {
	const locale = useLocale();
	const { title, desc, id, totalProject, iconName, img, bgImg, svg } =
		service || {};
	return (
		<div className="service-style-4">
			<div className="thumb">
				<img
					src={bgImg ? bgImg : "/images/service/h1-service-1.webp"}
					alt="image"
				/>
			</div>
			<div className="service-icon">
				<span>
					<i className={iconName ? iconName : "tji-optimization"}></i>
				</span>
			</div>
			<div className="service-content">
				<h4 className="title">
					<Link href={createLocalizedPath(`/services/${id}`, locale)}>{title}</Link>
				</h4>
				<Link className="service-button" href={createLocalizedPath(`/services/${id}`, locale)}>
					<i className="tji-arrow-right"></i>
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard4;
