const ButtonMenuToggler = ({ isMobile, type, headerType }) => {
	return (
		<>
			{type ? (
				<button className={`menu_btn ${isMobile ? "d-lg-none" : ""}`}>
					<span className="line">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</button>
			) : (
				<button
					className={`menu_btn ${
						isMobile
							? "d-lg-none"
							: headerType === 3 || headerType == 4 || headerType == 6
							? "d-none d-xl-inline-flex"
							: ""
					}`}
				>
					Menu
					<span className="cubes">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</span>
				</button>
			)}
		</>
	);
};

export default ButtonMenuToggler;
