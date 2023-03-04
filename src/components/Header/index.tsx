import React from "react";
import Logo from "../../assets/img/logo.svg";
import { Strings } from "../../strings";
import { ThemeToggleButton } from "../ThemeToggleButton";

export const Header = () => {
	const headerStrings = Strings.header;

	return (
		<header className="bg-summer-blue-100 dark:bg-boreal-blue-100 flex justify-evenly items-center">
			<img
				src={Logo}
				className=""
				alt={headerStrings.logoAlt}
			/>
			<nav>
				<ul className="flex text-white space-x-4">
					{headerStrings.nav.map((text, index) => (
                        <li key={index}>{text}</li>
                    ))}
				</ul>
			</nav>
			<ThemeToggleButton />
		</header>
	);
};
