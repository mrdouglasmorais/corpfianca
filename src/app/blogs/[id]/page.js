import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getBlogs from "@/libs/getBlogs";
import { notFound } from "next/navigation";
const items = getBlogs();
export default async function BlogDetails({ params }) {
	const { id } = await params;
	const isExistItem = items?.find(({ id: id1 }) => id1 === parseInt(id));
	if (!isExistItem) {
		notFound();
	}
	return (
		<PageWrapper
			isHeaderTop={true}
			footerType={"inner"}
			currentItemId={parseInt(id)}
		>
			<BlogDetailsMain />
		</PageWrapper>
	);
}

export async function generateStaticParams() {
	return items?.map(({ id }) => ({ id: id.toString() }));
}
