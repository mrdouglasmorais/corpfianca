import HistoryMain from "@/components/layout/main/HistoryMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function History() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<HistoryMain />
		</PageWrapper>
	);
}
