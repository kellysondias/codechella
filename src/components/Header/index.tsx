import React from "react";
import { Logo } from "../Logo";
import { NavigationMenu } from "../NavigationMenu";
import { ThemeToggleButton } from "../ThemeToggleButton";

export const Header: React.FC = () => (
	<header className="bg-summer-blue-100 flex-col flex-wrap justify-evenly items-center text-center dark:bg-boreal-blue-100 md:flex-row">
		<Logo />
		<NavigationMenu />
		<ThemeToggleButton />
	</header>
);