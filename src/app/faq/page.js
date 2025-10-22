import FaqMain from "@/components/layout/main/FaqMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Faq() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<FaqMain />
		</PageWrapper>
	);
}
