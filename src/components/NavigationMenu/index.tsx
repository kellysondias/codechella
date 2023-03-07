import React from "react";
import Strings from "../../strings";

export const NavigationMenu: React.FC = () => {
	const navStrings = Strings.components.navigationMenu;

	return (
		<nav className="font-text">
			<ul className="flex flex-wrap text-white space-x-4 text-center justify-center md:space-x-10 md:mb-5">
				{navStrings.map((text, index) => (
					<li key={index}>{text}</li>
				))}
			</ul>
		</nav>
	);
};
