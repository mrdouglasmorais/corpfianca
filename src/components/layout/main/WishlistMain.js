import Cta1 from "@/components/sections/cta/Cta1";
import HeroInner from "@/components/sections/heros/HeroInner";
import WishlistPrimary from "@/components/sections/wishlist/WishlistPrimary";

const WishlistMain = () => {
	return (
		<main>
			<HeroInner title={"Wishlist"} text={"Wishlist"} />
			<WishlistPrimary />
			<Cta1 />
		</main>
	);
};

export default WishlistMain;
