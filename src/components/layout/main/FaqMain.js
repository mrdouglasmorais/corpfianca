import Contact4 from "@/components/sections/contacts/Contact4";
import Cta1 from "@/components/sections/cta/Cta1";
import Faq3 from "@/components/sections/faq/Faq3";
import HeroInner from "@/components/sections/heros/HeroInner";

const FaqMain = () => {
	return (
		<main>
			<HeroInner title={"Faq"} text={"Faq"} />
			<Contact4 />
			<Faq3 />
			<Cta1 />
		</main>
	);
};

export default FaqMain;
