import ServicesMain from "@/components/layout/main/ServicesMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Services() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<ServicesMain />
		</PageWrapper>
	);
}
