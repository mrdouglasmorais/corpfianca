import ServiceDetailsMain from '@/components/layout/main/ServiceDetailsMain';
import PageWrapper from '@/components/shared/wrappers/PageWrapper';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function ServiceDetails({ params }) {
  const { locale, id } = await params;
  return (
    <PageWrapper isHeaderTop={true} footerType={'inner'}>
      <ServiceDetailsMain serviceId={parseInt(id, 10)} />
    </PageWrapper>
  );
}

