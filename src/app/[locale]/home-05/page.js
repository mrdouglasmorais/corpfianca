import IndexMain5 from "@/components/layout/main/IndexMain5";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home05() {
	return (
		<PageWrapper headerType="5" footerType={"home5"}>
			<IndexMain5 />
		</PageWrapper>
	);
}
