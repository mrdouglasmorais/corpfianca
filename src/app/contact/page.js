import ContactMain from "@/components/layout/main/ContactMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Contact() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<ContactMain />
		</PageWrapper>
	);
}
