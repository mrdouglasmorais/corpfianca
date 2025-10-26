import PrivacyPolicyMain from '@/components/layout/main/PrivacyPolicyMain';
import PageWrapper from '@/components/shared/wrappers/PageWrapper';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function PrivacyPolicy() {
  return (
    <PageWrapper isHeaderTop={true} footerType={'inner'}>
      <PrivacyPolicyMain />
    </PageWrapper>
  );
}

