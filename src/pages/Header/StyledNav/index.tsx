import React from "react";

interface StyledNavProps {
	isActive: boolean;
	isHidden: boolean;
	children: React.ReactNode;
}

export const StyledNav: React.FC<StyledNavProps> = ({
	isActive,
	isHidden,
	children,
}) => (
	<nav
		className={`${
			isActive
				? "flex"
				: `flex animate-backOut ${
						isHidden && "hidden"
				} `
		} absolute text-white before:block before:absolute before:-inset-1 before:bg-summer-blue-100 before:opacity-10 inline-block w-full h-full inset-0 justify-center items-center before:dark:bg-boreal-blue-100 sm:block sm:static sm:bg-transparent sm:before:hidden sm:animate-none`}
	>
		{children}
	</nav>
);
