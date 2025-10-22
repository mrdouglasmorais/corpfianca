import ErrorMain from "@/components/layout/main/ErrorMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Error() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<ErrorMain />
		</PageWrapper>
	);
}
