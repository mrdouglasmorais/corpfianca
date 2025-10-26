'use client';
import { useLocale } from 'next-intl';
import Link from "next/link";
import { createLocalizedPath } from '@/utils/pathUtils';

const ServiceCard7 = ({ service, idx, lastItem }) => {
	const locale = useLocale();
	const { title, id, iconName, img } = service || {};
	return (
		<div className="service-style-3 wow fadeInUp" data-wow-delay="0.1s">
			<div className="service-title">
				<div className="service-icon">
					<span>
						<i className={iconName ? iconName : "tji-optimization"}></i>
					</span>
				</div>
				<h4 className="title">
					<Link href={createLocalizedPath(`/services/${id}`, locale)}>{title}</Link>
				</h4>
			</div>
			<div className="service-right">
				<div className="desc">
					<p>
						In today's dynamic business environment, the key to success lies
						strategics our planning and operational business.
					</p>
				</div>
				<div className="service-button">
					<Link className="blog-btn-2" href={createLocalizedPath(`/services/${id}`, locale)}>
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
