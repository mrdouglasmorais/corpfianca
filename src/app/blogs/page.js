import BlogMain from "@/components/layout/main/BlogMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { Suspense } from "react";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function Blogs() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<Suspense fallback={<></>}>
				<BlogMain />
			</Suspense>
		</PageWrapper>
	);
}
