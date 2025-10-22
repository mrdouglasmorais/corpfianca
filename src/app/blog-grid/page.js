import BlogGridMain from "@/components/layout/main/BlogGridMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function BlogGrid() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<BlogGridMain />
		</PageWrapper>
	);
}
