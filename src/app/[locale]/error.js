"use client";

import ErrorMain from "@/components/layout/main/ErrorMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import { useEffect } from "react";

export default function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<PageWrapper isHeaderTop={true} footerType={"inner"}>
			<ErrorMain
				title={"Algo deu errado!"}
				text={"Ocorreu um erro inesperado. Tente novamente."}
				onRetry={reset}
			/>
		</PageWrapper>
	);
}
