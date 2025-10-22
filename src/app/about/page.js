import AboutMain from "@/components/layout/main/AboutMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function About() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<AboutMain />
		</PageWrapper>
	);
}
