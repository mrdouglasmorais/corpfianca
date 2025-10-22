import CheckoutPrimary from "@/components/sections/checkout/CheckoutPrimary";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";

const CheckoutMain = () => {
	return (
		<main>
			<HeroInner title={"Checkout"} text={"Checkout"} />
			<CheckoutPrimary />
			<Cta1 />
		</main>
	);
};

export default CheckoutMain;
