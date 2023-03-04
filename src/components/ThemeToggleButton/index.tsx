import React, { useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

// Switch icons to "Font Awesome"

export const ThemeToggleButton: React.FC = () => {
	const systemPreference = !window.matchMedia("(prefers-color-scheme: dark)")
		.matches;

	const pageClasses = document.documentElement.classList;

	useEffect(() => {
		systemPreference && pageClasses.add("dark");
	}, []);

	const toggle = () => {
		pageClasses.toggle("dark");
	};

	return (
		<>
			<MoonIcon
				className="dark:hidden h-8 text-white cursor-pointer"
				onClick={toggle}
			/>
			<SunIcon
				className="hidden dark:block h-8 text-white cursor-pointer"
				onClick={toggle}
			/>
		</>
	);
};
