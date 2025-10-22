import Contact3 from "@/components/sections/contacts/Contact3";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import TeamDetails1 from "@/components/sections/teams/TeamDetails1";

const TeamDetailsMain = () => {
	return (
		<main>
			<HeroInner title={"Team details"} text={"Team details"} />
			<TeamDetails1 />
			<Contact3 />
			<Cta1 />
		</main>
	);
};

export default TeamDetailsMain;
