import IndexMain2 from "@/components/layout/main/IndexMain2";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home2() {
	return (
		<PageWrapper headerType={1} footerType={1} isHeaderTop={false}>
			<IndexMain2 />
		</PageWrapper>
	);
}
