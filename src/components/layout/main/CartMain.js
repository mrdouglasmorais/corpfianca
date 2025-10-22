import CartPrimary from "@/components/sections/cart/CartPrimary";
import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";

const CartMain = () => {
	return (
		<main>
			<HeroInner title={"Cart"} text={"Cart"} />
			<CartPrimary />
			<Cta1 />
		</main>
	);
};

export default CartMain;
