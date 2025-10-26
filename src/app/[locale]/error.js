'use client';

import ErrorMain from '@/components/layout/main/ErrorMain';
import PageWrapper from '@/components/shared/wrappers/PageWrapper';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  const t = useTranslations('common');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageWrapper isHeaderTop={true} footerType={'inner'}>
      <ErrorMain
        title={t('something_went_wrong')}
        text={t('unexpected_error')}
        onRetry={reset}
        showCta={false}
      />
    </PageWrapper>
  );
}
