import IndexMain8 from "@/components/layout/main/IndexMain8";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home08() {
	return (
		<PageWrapper headerType="8" footerType={"home8"}>
			<IndexMain8 />
		</PageWrapper>
	);
}
