import CartMain from "@/components/layout/main/CartMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const Cart = () => {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"} isEcommerce={true}>
			<CartMain />
		</PageWrapper>
	);
};

export default Cart;
