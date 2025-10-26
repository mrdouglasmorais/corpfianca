'use client';
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useTranslations, useLocale } from 'next-intl';
import { createLocalizedPath } from '@/utils/pathUtils';

const ErrorPrimary = ({ onRetry }) => {
	const t = useTranslations('common');
	const locale = useLocale();
	
	return (
		<section className="tj-error__area not-found section-space">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col">
						<div className="tj-error__wrap text-center">
							<div className="tj-error__content">
								<div className="error_img mb-20">
									<img src="/images/error/404.png" alt="" />
								</div>
								<h2 className="error_title text-anim mb-20">
									{t('page_not_found')}
								</h2>
								<div className="error_desc mb-30">
									{t('page_not_found_desc')}
								</div>
								{onRetry ? (
									<div className="d-flex gap-3 justify-content-center">
										<ButtonPrimary text={t('try_again')} onClick={onRetry} />
										<ButtonPrimary text={t('go_to_home')} url={createLocalizedPath('/', locale)} />
									</div>
								) : (
									<ButtonPrimary text={t('go_back_home')} url={createLocalizedPath('/', locale)} />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ErrorPrimary;
