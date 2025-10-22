import CareersMain from "@/components/layout/main/CareersMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Careers() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<CareersMain />
		</PageWrapper>
	);
}
