import WishlistMain from "@/components/layout/main/WishlistMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Wishlist() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"} isEcommerce={true}>
			<WishlistMain />
		</PageWrapper>
	);
}
