import PortfoliosMain from "@/components/layout/main/PortfoliosMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Portfolios() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<PortfoliosMain />
		</PageWrapper>
	);
}
