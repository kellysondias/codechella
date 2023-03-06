import React from "react";
import Logo from "/img/logo.svg";
import { Strings } from "../../strings";
import { ThemeToggleButton } from "../ThemeToggleButton";

export const Header: React.FC = () => {
	const headerStrings = Strings.header;

	return (
		<header className="bg-summer-blue-100 flex flex-wrap justify-evenly items-center text-center dark:bg-boreal-blue-100">
			<img
				src={Logo}
				alt={headerStrings.logoAlt}
			/>
			<nav className="font-nav">
				<ul className="flex flex-wrap text-white space-x-4 text-center">
					{headerStrings.nav.map((text, index) => (
						<li key={index}>{text}</li>
					))}
				</ul>
				<ThemeToggleButton />
			</nav>
		</header>
	);
};
