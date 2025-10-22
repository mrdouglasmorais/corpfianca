import ShopMain from "@/components/layout/main/ShopMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Shop() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"} isEcommerce={true}>
			<ShopMain />
		</PageWrapper>
	);
}
