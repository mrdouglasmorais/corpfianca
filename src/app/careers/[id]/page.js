import CareerDetailsMain from "@/components/layout/main/CareerDetailsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getCareers from "@/libs/getCareers";
import { notFound } from "next/navigation";
const items = getCareers();
export default async function CareerDetails({ params }) {
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
			<CareerDetailsMain />
		</PageWrapper>
	);
}
export async function generateStaticParams() {
	return items?.map(({ id }) => ({ id: id.toString() }));
}
