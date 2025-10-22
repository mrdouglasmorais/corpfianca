import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import Team1 from "@/components/sections/teams/Team1";

const TeamMain = () => {
	return (
		<main>
			<HeroInner title={"Team"} text={"Team"} />
			<Team1 type={2} />
			<Cta1 />
		</main>
	);
};

export default TeamMain;
