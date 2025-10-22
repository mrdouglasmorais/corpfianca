import PasswordMain from "@/components/layout/main/PasswordMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Password() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<PasswordMain />
		</PageWrapper>
	);
}
