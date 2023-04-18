import React from "react";
import { Logo } from "../Logo";
import { NavigationMenu } from "./NavigationMenu";
import { ThemeToggleButton } from "./ThemeToggleButton";

export const Header: React.FC = () => (
	<header className="bg-summer-blue-100 flex flex-row justify-evenly items-center text-center dark:bg-boreal-blue-100 sm:flex-col md:flex-row z-50">
		<Logo />
		<NavigationMenu />
		<ThemeToggleButton />
	</header>
);
