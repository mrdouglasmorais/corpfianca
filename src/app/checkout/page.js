import CheckoutMain from "@/components/layout/main/CheckoutMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Checkout() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"} isEcommerce={true}>
			<CheckoutMain />
		</PageWrapper>
	);
}
