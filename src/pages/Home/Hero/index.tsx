import React from "react";

import Strings from "../../../strings";

export const Hero: React.FC = () => {
	const heroString = Strings.pages.home.hero;

	return (
		<section className="bg-summer-banner w-full h-96 bg-no-repeat bg-cover bg-center dark:bg-boreal-banner">
			<div className="flex justify-center flex-col text-center text-3xl text-summer-hero w-full h-full bg-white/25 dark:bg-transparent dark:text-boreal-hero sm:text-6xl">
                <p>{heroString.lineOne}</p>
                <p>{heroString.lineTwo}</p>
            </div>
		</section>
	);
};
