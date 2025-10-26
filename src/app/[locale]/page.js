import IndexMain from '@/components/layout/main/IndexMain';
import PageWrapper from '@/components/shared/wrappers/PageWrapper';

export default async function Home() {
  return (
    <PageWrapper isHeaderTop={true} headerType={1} topbarType={1} needZIndex={true}>
      <IndexMain />
    </PageWrapper>
  );
}
