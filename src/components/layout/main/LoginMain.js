import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import LoginPrimary from "@/components/sections/registration/LoginPrimary";

const LoginMain = () => {
	return (
		<main>
			<HeroInner title={"Login"} text={"Login"} />
			<LoginPrimary />
			<Cta1 />
		</main>
	);
};

export default LoginMain;
