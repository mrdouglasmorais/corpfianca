import BlogSidebarMain from "@/components/layout/main/BlogSidebarMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function BlogSidebar() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<BlogSidebarMain />
		</PageWrapper>
	);
}
