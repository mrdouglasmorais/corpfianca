import CareersMain from "@/components/layout/main/CareersMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Careers() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<CareersMain />
		</PageWrapper>
	);
}
