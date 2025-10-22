import IndexMain from "@/components/layout/main/IndexMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default async function Home() {
	return (
		<PageWrapper isHeaderTop={true} needZIndex={true}>
			<IndexMain />
		</PageWrapper>
	);
}
