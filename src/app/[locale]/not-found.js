import ErrorMain from '@/components/layout/main/ErrorMain';
import PageWrapper from '@/components/shared/wrappers/PageWrapper';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('common');

  return (
    <PageWrapper isHeaderTop={true} footerType={'inner'}>
      <ErrorMain title={t('error_404')} text={t('page_not_found_desc')} />
    </PageWrapper>
  );
}
