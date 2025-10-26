import ServiceDetailsMain from '@/components/layout/main/ServiceDetailsMain';
import ProductNotFound from '@/components/shared/ProductNotFound';
import PageWrapper from '@/components/shared/wrappers/PageWrapper';
import getALlServices from '@/libs/getALlServices';
import { findServiceBySlug } from '@/utils/slugUtils';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function ProductDetails({ params }) {
  const { locale, slug } = await params;
  const services = getALlServices();
  const service = findServiceBySlug(services, slug);

  if (!service) {
    return (
      <PageWrapper isHeaderTop={true} footerType={'inner'}>
        <ProductNotFound />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper isHeaderTop={true} footerType={'inner'}>
      <ServiceDetailsMain serviceId={service.id} />
    </PageWrapper>
  );
}
