import ProductsMain from '@/components/layout/main/ServicesMain';
import PageWrapper from '@/components/shared/wrappers/PageWrapper';

export const dynamic = 'force-dynamic';

export default async function Products() {
  return (
    <PageWrapper isHeaderTop={true}>
      <ProductsMain />
    </PageWrapper>
  );
}
