import WishlistMain from "@/components/layout/main/WishlistMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Wishlist() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"} isEcommerce={true}>
			<WishlistMain />
		</PageWrapper>
	);
}
