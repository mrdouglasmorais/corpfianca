import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import PortfoliosPrimary from "@/components/sections/portfolios/PortfoliosPrimary";

const PortfoliosMain = () => {
	return (
		<main>
			<HeroInner title={"Portfolios"} text={"Portfolios"} />
			<PortfoliosPrimary />
			<Cta1 />
		</main>
	);
};

export default PortfoliosMain;
