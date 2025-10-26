import TermsConditionsMain from '@/components/layout/main/TermsConditionsMain';
import PageWrapper from '@/components/shared/wrappers/PageWrapper';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function TermsConditions() {
  return (
    <PageWrapper isHeaderTop={true} footerType={'inner'}>
      <TermsConditionsMain />
    </PageWrapper>
  );
}
