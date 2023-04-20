import React from "react";
import headerLogo from "/assets/img/logo.svg";
import strings from "../../strings";

export const HeaderLogo: React.FC = () => {
	const logoStrings = strings.components.logo;

	return (
		<div className="flex justify-center md:py-5">
			<img
				src={headerLogo}
				alt={logoStrings.logoAlt}
			/>
		</div>
	);
};
