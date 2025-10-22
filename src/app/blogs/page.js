import BlogMain from "@/components/layout/main/BlogMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { Suspense } from "react";

export default function Blogs() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<Suspense fallback={<></>}>
				<BlogMain />
			</Suspense>
		</PageWrapper>
	);
}
