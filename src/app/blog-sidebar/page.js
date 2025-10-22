import BlogSidebarMain from "@/components/layout/main/BlogSidebarMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function BlogWithSidebar() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<BlogSidebarMain />
		</PageWrapper>
	);
}
