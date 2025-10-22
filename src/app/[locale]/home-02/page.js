import IndexMain2 from "@/components/layout/main/IndexMain2";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home02() {
	return (
		<PageWrapper headerType="2" footerType={"home2"}>
			<IndexMain2 />
		</PageWrapper>
	);
}
