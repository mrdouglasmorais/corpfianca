import About3 from "@/components/sections/About/About3";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import Brands2 from "@/components/sections/brands/Brands2";
import Cta2 from "@/components/sections/cta/Cta2";
import Features2 from "@/components/sections/features/Features2";
import Hero3 from "@/components/sections/heros/Hero3";
import Portfolios3 from "@/components/sections/portfolios/Portfolios3";
import PricingPlan from "@/components/sections/pricing-plan/PricingPlan";
import Services3 from "@/components/sections/services/Services3";
import Testimonials3 from "@/components/sections/testimonials/Testimonials3";
import FeatureMarquee from "@/components/shared/marquee/FeatureMarquee";

const IndexMain3 = () => {
	return (
		<main>
			<Hero3 />
			<Brands2 />
			<About3 />
			<Services3 />
			<FeatureMarquee />
			<Features2 />
			<Portfolios3 />
			<PricingPlan />
			<Testimonials3 />
			<Blogs3/>
			<Cta2/>
		</main>
	);
};

export default IndexMain3;
