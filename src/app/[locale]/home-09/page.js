import IndexMain9 from "@/components/layout/main/IndexMain9";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home09() {
	return (
		<PageWrapper headerType="9" footerType={"home9"}>
			<IndexMain9 />
		</PageWrapper>
	);
}
