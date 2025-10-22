import IndexMain7 from "@/components/layout/main/IndexMain7";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Home07() {
	return (
		<PageWrapper headerType="7" footerType={"home7"}>
			<IndexMain7 />
		</PageWrapper>
	);
}
