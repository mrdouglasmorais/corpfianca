import ErrorMain from "@/components/layout/main/ErrorMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Notfound() {
	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<ErrorMain title={"404"} text={"404"} />
		</PageWrapper>
	);
}
