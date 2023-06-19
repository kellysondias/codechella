import React from "react";

import { RowContainer } from "./RowContainer";
import { RowItem } from "./RowItem";

interface ILineUpList {
	lists: {
		row1: string;
		row2: string[];
		row3: string[];
		row4: string[];
	};
}

export const LineUpList: React.FC<ILineUpList> = ({ lists }) => {
	const { row1, row2, row3, row4 } = lists;

	return (
		<div lang="en" className="flex-center flex-col">
			<strong className="text-5xl mt-12 mb-8 leading-snug">{row1}</strong>
			<div className="flex-center flex-wrap text-center md:flex-col md:w-full">
				<RowContainer>
					<RowItem row={row2} />
				</RowContainer>
				<RowContainer>
					<RowItem row={row3} />
				</RowContainer>
				<RowContainer>
					<RowItem row={row4} />
				</RowContainer>
			</div>
		</div>
	);
};
