import React from "react";
import logo from "/img/logo.svg";
import Strings from "../../strings";

export const Logo: React.FC = () => {
	const logoStrings = Strings.components.logo;

	return (
		<div className="flex justify-center md:py-5">
			<img
				src={logo}
				alt={logoStrings.logoAlt}
			/>
		</div>
	);
};
