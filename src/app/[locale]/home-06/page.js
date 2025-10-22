import IndexMain6 from "@/components/layout/main/IndexMain6";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home06() {
	return (
		<PageWrapper headerType="6" footerType={"home6"}>
			<IndexMain6 />
		</PageWrapper>
	);
}
