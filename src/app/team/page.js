import TeamMain from "@/components/layout/main/TeamMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Team() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<TeamMain />
		</PageWrapper>
	);
}
