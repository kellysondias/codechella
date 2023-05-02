import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { ButtonComponent } from "../../Types/ButtonComponent";

export const Button: React.FC<ButtonComponent> = ({ ...props }) => (
	<button
		className="flex items-center justify-center w-full text-white text-xl rounded-2xl font-text py-4 px-11 my-6 shadow-xl shadow-black-100 bg-summer-blue-100 dark:bg-boreal-blue-100 max-[346px]:text-sm sm:text-center md:w-auto md:px-5"
		{...props}
	>
		<b className="mr-4">{props.children}</b>
		{props.icon && (
			<FontAwesomeIcon
				icon={props.icon}
				className="text-2xl"
			/>
		)}
	</button>
);
