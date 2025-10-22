import IndexMain6 from "@/components/layout/main/IndexMain6";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home6() {
	return (
		<PageWrapper headerType={1} footerType={1} isHeaderTop={false}>
			<IndexMain6 />
		</PageWrapper>
	);
}
