import React from "react";
import strings from "../../../strings";

export const LineUp:React.FC = () => {
	const lineUpStrings = strings.pages.home.lineUp;

	return (
		<section className="flex justify-center items-center text-center text-summer-gray dark:text-white">
			<h2 className="text-5xl pb-8">{lineUpStrings.title}</h2>
		</section>
	);
};
