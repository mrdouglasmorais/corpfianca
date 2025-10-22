import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import PasswordPrimary from "@/components/sections/registration/PasswordPrimary";

const PasswordMain = () => {
	return (
		<main>
			<HeroInner title={"Password"} text={"Password"} />
			<PasswordPrimary />
			<Cta1 />
		</main>
	);
};

export default PasswordMain;
