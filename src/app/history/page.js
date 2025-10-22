import HistoryMain from "@/components/layout/main/HistoryMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function History() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<HistoryMain />
		</PageWrapper>
	);
}
