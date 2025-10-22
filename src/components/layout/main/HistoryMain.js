import About12 from "@/components/sections/About/About12";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import History1 from "@/components/sections/history/History1";

const HistoryMain = () => {
	return (
		<main>
			<HeroInner title={"Company history"} text={"Company history"} />
			<About12 />
			<History1 />
			<Cta1 />
		</main>
	);
};

export default HistoryMain;
