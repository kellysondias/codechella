import React, { useState } from "react";
import Strings from "../../strings";
import { MobileMenu } from "../MobileMenu";

// Assistir aulas sobre animação no Tailwind (https://cursos.alura.com.br/course/tailwind-css-estilizando-pagina-classes-utilitarias/task/105536)

export const NavigationMenu: React.FC = () => {
	const navStrings = Strings.components.navigationMenu;

	const [isActive, setIsActive] = useState(false);

	const handleMenu = () => {
		isActive ? setIsActive(false) : setIsActive(true);
	};

	return (
		<div className="flex">
			<MobileMenu
				isActive={isActive}
				onClick={() => handleMenu()}
			/>
			<nav
				className={`${
					isActive ? "flex" : "hidden"
				} absolute font-text text-white before:block before:absolute before:-inset-1 before:bg-summer-blue-100 before:opacity-10 inline-block w-full h-full inset-0 justify-center before:dark:bg-boreal-blue-100 sm:block sm:static sm:bg-transparent sm:before:hidden`}
			>
				<ul className="flex flex-col absolute bg-summer-blue-100 dark:bg-boreal-blue-100 text-center top-40 space-x-0 justify-center items-center p-5 opacity-100  animate-backInDown sm:animate-none sm:static sm:bg-transparent sm:flex-row sm:space-x-10 md:mb-0 md:space-x-4 lg:space-x-10">
					{navStrings.map((text, index) => (
						<li
							key={index}
							className="w-full border-b-2 border-white"
						>
							{text}
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
