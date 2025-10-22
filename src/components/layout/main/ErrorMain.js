import Cta1 from "@/components/sections/cta/Cta1";
import ErrorPrimary from "@/components/sections/error/ErrorPrimary";
import HeroInner from "@/components/sections/heros/HeroInner";

const ErrorMain = ({ title, text, onRetry, showCta = true }) => {
	return (
		<main>
			<HeroInner title={title ? title : "Error"} text={text ? text : "Error"} />
			<ErrorPrimary onRetry={onRetry} />
			{showCta && <Cta1 />}
		</main>
	);
};

export default ErrorMain;
