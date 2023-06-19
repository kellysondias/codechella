import React from "react";
import strings from "../../../strings";
import { LineUpSection } from "./LineUpSection";
import { LineUpFooter } from "./LineUpFooter";

export const LineUp: React.FC = () => {
	const lineUpStrings = {
		heading: strings.pages.home.lineUp.heading,
		dates: strings.pages.home.lineUp.dates,
		rows: strings.pages.home.lineUp.lineUpCard,
		firstList: strings.pages.home.lineUp.lineUpCard.firstList,
		secondList: strings.pages.home.lineUp.lineUpCard.secondList,
	};

	return (
		<section className="flex flex-col justify-center items-center text-center text-summer-gray dark:text-white">
			<h2 className="text-5xl pb-8">{lineUpStrings.heading}</h2>
			<LineUpSection
				date={lineUpStrings.dates.firstDate}
				lists={lineUpStrings.firstList}
			/>
			<LineUpSection
				date={lineUpStrings.dates.secondDate}
				lists={lineUpStrings.secondList}
			/>
			<LineUpFooter />
		</section>
	);
};
