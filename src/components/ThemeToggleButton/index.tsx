import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faSun } from "@fortawesome/free-solid-svg-icons";

export const ThemeToggleButton: React.FC = () => {
	const systemPreference = !window.matchMedia("(prefers-color-scheme: dark)")
		.matches;

	const root = document.getElementById("root");

	const pageClasses = root.classList;

	useEffect(() => {
		systemPreference && pageClasses.add("dark");
	}, []);

	const toggle = () => {
		pageClasses.toggle("dark");
	};

	return (
		<>
			<FontAwesomeIcon
				icon={faSun}
				className="hidden dark:block h-5 text-white cursor-pointer"
				onClick={toggle}
			/>
			<FontAwesomeIcon
				icon={faSnowflake}
				className="dark:hidden h-5 text-white cursor-pointer"
				onClick={toggle}
			/>
		</>
	);
};
