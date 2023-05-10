import React from "react";

import { LineUpList } from "./LineUpList";

interface ILineUpSection {
	date: string;
	lists: {
		row1: string;
		row2: string[];
		row3: string[];
		row4: string[];
	};
}

export const LineUpSection: React.FC<ILineUpSection> = ({ date, lists }) => {
	return (
		<div className="text-center">
			<h3 className="line-up-header">{date}</h3>
			<LineUpList list={lists} />
		</div>
	);
};
