import PricingPlanMain from "@/components/layout/main/PricingPlanMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function PricingPlan() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<PricingPlanMain />
		</PageWrapper>
	);
}
