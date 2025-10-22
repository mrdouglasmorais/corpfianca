import PortfoliosMain from "@/components/layout/main/PortfoliosMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Portfolios() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<PortfoliosMain />
		</PageWrapper>
	);
}
