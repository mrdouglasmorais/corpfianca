import About4 from "@/components/sections/About/About4";
import Blogs4 from "@/components/sections/blogs/Blogs4";
import Cta3 from "@/components/sections/cta/Cta3";
import Features3 from "@/components/sections/features/Features3";
import Hero4 from "@/components/sections/heros/Hero4";
import Portfolios4 from "@/components/sections/portfolios/Portfolios4";
import Progress2 from "@/components/sections/progress/Progress2";
import Services4 from "@/components/sections/services/Services4";
import Team2 from "@/components/sections/teams/Team2";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import FeatureMarquee from "@/components/shared/marquee/FeatureMarquee";

const IndexMain4 = () => {
	return (
		<main>
			<Hero4 />
			<Features3 />
			<About4 />
			<Services4 />
			<FeatureMarquee />
			<Progress2 />
			<Portfolios4 />
			<Team2 />
			<Testimonials2 type={2} />
			<Blogs4 />
			<Cta3 />
		</main>
	);
};

export default IndexMain4;
