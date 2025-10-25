import BlogMain from '@/components/layout/main/BlogMain';
import PageWrapper from '@/components/shared/wrappers/PageWrapper';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Noticias() {
  return (
    <PageWrapper isHeaderTop={true} footerType={'inner'}>
      <BlogMain />
    </PageWrapper>
  );
}
