import PasswordMain from "@/components/layout/main/PasswordMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function password() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<PasswordMain />
		</PageWrapper>
	);
}
