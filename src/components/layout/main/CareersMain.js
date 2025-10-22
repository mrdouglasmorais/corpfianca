import Careers1 from "@/components/sections/careers/Careers1";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";

const CareersMain = () => {
	return (
		<main>
			<HeroInner title={"Careers"} text={"Careers"} />
			<Careers1 />
			<Cta1 />
		</main>
	);
};

export default CareersMain;
