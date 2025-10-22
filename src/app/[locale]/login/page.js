import LoginMain from "@/components/layout/main/LoginMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Login() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<LoginMain />
		</PageWrapper>
	);
}
