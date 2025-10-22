import PricingPlanMain from "@/components/layout/main/PricingPlanMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function PricingPlan() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<PricingPlanMain />
		</PageWrapper>
	);
}
