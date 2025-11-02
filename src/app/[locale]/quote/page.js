import QuoteMain from "@/components/layout/main/QuoteMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Quote() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<QuoteMain />
		</PageWrapper>
	);
}

