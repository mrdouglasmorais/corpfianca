import IndexMain3 from "@/components/layout/main/IndexMain3";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home03() {
	return (
		<PageWrapper headerType="3" footerType={"home3"}>
			<IndexMain3 />
		</PageWrapper>
	);
}
