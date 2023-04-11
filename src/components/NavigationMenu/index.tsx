import React, { useState, useEffect } from "react";
import Strings from "../../strings";
import { ListItem } from "../ListItem";
import { MobileMenu } from "../MobileMenu";

export const NavigationMenu: React.FC = () => {
	const navStrings = Strings.components.navigationMenu;

	const [isActive, setIsActive] = useState(false);
	const [isHidden, setIsHidden] = useState(true);

	const handleMenu = () => {
		setIsActive(!isActive);
	};

	useEffect(() => {
		if (isActive) {
			setIsHidden(false);
		} else {
			const timeoutId = setTimeout(() => {
				setIsHidden(true);
			}, 400);
			return () => clearTimeout(timeoutId);
		}
	}, [isActive]);

	return (
		<div className="flex">
			<MobileMenu
				isActive={isActive}
				onClick={handleMenu}
			/>
			<nav
				className={`${
					isActive
						? "flex"
						: `animate-backOut transition-opacity ${isHidden && "hidden"} sm:animate-none`
				} absolute font-text text-white before:block before:absolute before:-inset-1 before:bg-summer-blue-100 before:opacity-10 inline-block w-full h-full inset-0 justify-center items-center before:dark:bg-boreal-blue-100 sm:block sm:static sm:bg-transparent sm:before:hidden`}
			>
				<ul
					className={`flex flex-col absolute ${
						isActive ? "animate-backInDown" : "animate-backOutUp"
					} bg-summer-blue-100 dark:bg-boreal-blue-100 text-center top-40 space-x-0 justify-center items-center p-5 opacity-100  sm:animate-none sm:static sm:bg-transparent sm:flex-row sm:space-x-10 md:mb-0 md:space-x-4 lg:space-x-10`}
				>
					{navStrings.map((text, index) => (
						<ListItem
							index={index}
							list={navStrings}
							key={text}
						>
							{text}
						</ListItem>
					))}
				</ul>
			</nav>
		</div>
	);
};
