import FaqMain from "@/components/layout/main/FaqMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Faq() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<FaqMain />
		</PageWrapper>
	);
}
