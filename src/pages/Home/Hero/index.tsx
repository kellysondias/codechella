import React from "react";

import Strings from "../../../strings";

export const Hero: React.FC = () => {
	const heroString = Strings.pages.home.hero;

	return (
		<div className="flex justify-center flex-col bg-fixed bg-summer-banner w-full h-[270px] bg-no-repeat bg-cover text-summer-hero text-center text-3xl dark:bg-boreal-banner dark:text-boreal-hero">
			<p>{heroString.lineOne}</p>
            <p>{heroString.lineTwo}</p>
		</div>
	);
};
