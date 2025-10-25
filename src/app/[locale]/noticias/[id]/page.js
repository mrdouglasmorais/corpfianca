import BlogDetailsMain from '@/components/layout/main/BlogDetailsMain';
import PageWrapper from '@/components/shared/wrappers/PageWrapper';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function NoticiaDetails({ params }) {
  const { locale, id } = await params;
  return (
    <PageWrapper isHeaderTop={true} footerType={'inner'}>
      <BlogDetailsMain blogId={id} />
    </PageWrapper>
  );
}
