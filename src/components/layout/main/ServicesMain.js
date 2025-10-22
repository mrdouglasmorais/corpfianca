import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import ServicesPrimary from "@/components/sections/services/ServicesPrimary";

const ServicesMain = () => {
	return (
		<main>
			<HeroInner title={"Services"} text={"Services"} />
			<ServicesPrimary />
			<Cta1 />
		</main>
	);
};

export default ServicesMain;
