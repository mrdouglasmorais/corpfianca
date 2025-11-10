import RegisterMain from "@/components/layout/main/RegisterMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Register() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<RegisterMain />
		</PageWrapper>
	);
}
