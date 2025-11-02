import ClaimMain from "@/components/layout/main/ClaimMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Claims() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<ClaimMain />
		</PageWrapper>
	);
}

