import React from "react";
import headerLogo from "/assets/img/logo.svg";
import Strings from "../../../strings";

export const HeaderLogo: React.FC = () => {
	const logoStrings = Strings.components.logo;

	return (
		<div className="flex justify-center md:py-5">
			<img
				src={headerLogo}
				alt={logoStrings.logoAlt}
			/>
		</div>
	);
};
