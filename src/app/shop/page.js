import ShopMain from "@/components/layout/main/ShopMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Shop() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"} isEcommerce={true}>
			<ShopMain />
		</PageWrapper>
	);
}
