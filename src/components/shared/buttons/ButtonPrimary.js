import Link from "next/link";

const ButtonPrimary = ({
	className,
	text,
	url,
	type,
	iconName,
	onClick,
	disabled,
	iconCount = 2,
}) => {
	const renderIcons = () => (
		<span>
			{Array.from({ length: iconCount }).map((_, idx) => (
				<i key={idx} className={iconName ? iconName : "tji-arrow-right"}></i>
			))}
		</span>
	);

	return (
		<>
			{type || onClick ? (
				<button
					type={type ? type : "button"}
					onClick={onClick}
					className={`tj-primary-btn ${className ? className : ""}`}
					disabled={disabled}
				>
					<span className="btn_inner">
						<span className="btn_icon">
							{renderIcons()}
						</span>
						<span className="btn_text">
							<span>{text}</span>
						</span>
					</span>
				</button>
			) : (
				<Link
					href={url ? url : "/"}
					className={`tj-primary-btn ${className ? className : ""}`}
				>
					<span className="btn_inner">
						<span className="btn_icon">
							{renderIcons()}
						</span>
						<span className="btn_text">
							<span>{text}</span>
						</span>
					</span>
				</Link>
			)}
		</>
	);
};

export default ButtonPrimary;
