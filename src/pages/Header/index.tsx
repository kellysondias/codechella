import React from "react";
import { HeaderLogo } from "./HeaderLogo";
import { NavigationMenu } from "./NavigationMenu";
import { ThemeToggleButton } from "./ThemeToggleButton";

const Header: React.FC = () => (
	<header className="bg-summer-blue-100 flex flex-row justify-evenly items-center text-center dark:bg-boreal-blue-100 sm:flex-col md:px-3 md:flex-row z-50 lg:px-0">
		<HeaderLogo />
		<NavigationMenu />
		<ThemeToggleButton />
	</header>
);

export default Header;
