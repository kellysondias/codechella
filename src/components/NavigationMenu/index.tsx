import React, { useState } from "react";
import Strings from "../../strings";
import { MobileMenu } from "../MobileMenu";

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
				} absolute  font-text text-white bg-summer-blue-100 dark:bg-boreal-blue-100 opacity-20 w-full h-full inset-0 justify-center sm:block sm:static sm:bg-transparent sm:opacity-100`}
			>
				{/*-top-24*/}
				<ul className="flex flex-col absolute bg-black text-center top-20 space-x-0 justify-center items-center sm:flex-row mb-5 opacity-100 md:mb-0 md:space-x-4 lg:space-x-10">
					{navStrings.map((text, index) => (
						<li key={index}>{text}</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
