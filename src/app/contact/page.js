import ContactMain from "@/components/layout/main/ContactMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Contact() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<ContactMain />
		</PageWrapper>
	);
}
