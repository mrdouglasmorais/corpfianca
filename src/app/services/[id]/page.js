import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getALlServices from "@/libs/getALlServices";
import { notFound } from "next/navigation";
const items = getALlServices();
export default async function ServiceDetails({ params }) {
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
			<ServiceDetailsMain />
		</PageWrapper>
	);
}
export async function generateStaticParams() {
	return items?.map(({ id }) => ({ id: id.toString() }));
}
