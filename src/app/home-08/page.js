import IndexMain8 from "@/components/layout/main/IndexMain8";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home8() {
	return (
		<PageWrapper headerType={8} footerType={8} isHeaderTop={true}>
			<IndexMain8 />
		</PageWrapper>
	);
}
