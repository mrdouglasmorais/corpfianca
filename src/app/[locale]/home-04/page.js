import IndexMain4 from "@/components/layout/main/IndexMain4";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home04() {
	return (
		<PageWrapper headerType="4" footerType={"home4"}>
			<IndexMain4 />
		</PageWrapper>
	);
}
