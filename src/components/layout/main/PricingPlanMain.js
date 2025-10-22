import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import PricingPlan4 from "@/components/sections/pricing-plan/PricingPlan4";

const PricingPlanMain = () => {
	return (
		<main>
			<HeroInner title={"Pricing plan"} text={"Pricing plan"} />
			<PricingPlan4 />
			<Cta1 />
		</main>
	);
};

export default PricingPlanMain;
