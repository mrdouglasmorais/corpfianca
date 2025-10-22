import CareerDetails1 from "@/components/sections/careers/CareerDetails1";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";

const CareerDetailsMain = () => {
	return (
		<main>
			<HeroInner title={"Careers details"} text={"Careers details"} />
			<CareerDetails1 />
			<Cta1 />
		</main>
	);
};

export default CareerDetailsMain;
