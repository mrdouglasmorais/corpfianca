import BlogDetailsMain from '@/components/layout/main/BlogDetailsMain';
import PageWrapper from '@/components/shared/wrappers/PageWrapper';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function NoticiaDetails({ params }) {
  const resolvedParams = await params;
  const slugParam = resolvedParams?.slug;
  const normalizedSlug = Array.isArray(slugParam) ? slugParam.join('/') : slugParam || '';

  return (
    <PageWrapper isHeaderTop={true} footerType={'inner'}>
      <BlogDetailsMain blogSlug={normalizedSlug} />
    </PageWrapper>
  );
}
