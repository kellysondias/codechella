import React from "react";
import { HeaderLogo } from "./HeaderLogo";
import { NavigationMenu } from "./NavigationMenu";
import { ThemeToggleButton } from "./ThemeToggleButton";

const Header: React.FC = () => (
	<header className="bg-summer-blue-100 flex flex-row justify-evenly items-center text-center dark:bg-boreal-blue-100 sm:flex-col md:flex-row z-50">
		<HeaderLogo />
		<NavigationMenu />
		<ThemeToggleButton />
	</header>
);

export default Header;
