import IndexMain3 from "@/components/layout/main/IndexMain3";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home3() {
	return (
		<PageWrapper headerType={3} footerType={3} isHeaderTop={false}>
			<IndexMain3 />
		</PageWrapper>
	);
}
