import React from "react";

interface ListProps {
	isActive: boolean;
	children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ isActive, children }) => (
	<ul
		className={`flex flex-col absolute ${
			isActive ? "animate-back-in-down" : "animate-back-out-up"
		} bg-summer-blue-100 dark:bg-boreal-blue-100 text-center top-40 space-x-0 justify-center items-center p-5 opacity-100  sm:animate-none sm:static sm:bg-transparent sm:flex-row sm:space-x-10 md:mb-0 md:space-x-4 lg:space-x-10`}
	>
		{children}
	</ul>
);
