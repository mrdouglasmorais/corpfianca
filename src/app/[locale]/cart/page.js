import CartMain from "@/components/layout/main/CartMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Cart() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<CartMain />
		</PageWrapper>
	);
}
