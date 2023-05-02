import React from "react";

import strings from "../../../strings";

export const Hero: React.FC = () => {
	const heroString = strings.pages.home.hero;

	return (
		<section className="bg-summer-banner w-full h-96 bg-no-repeat bg-cover bg-center dark:bg-boreal-banner">
			<div className="flex justify-center flex-col text-center text-3xl text-summer-gray w-full h-full bg-white/25 dark:bg-transparent dark:text-boreal-hero sm:text-6xl">
                <h2 className="sm:mb-4">{heroString.lineOne}</h2>
                <h2>{heroString.lineTwo}</h2>
            </div>
		</section>
	);
};
