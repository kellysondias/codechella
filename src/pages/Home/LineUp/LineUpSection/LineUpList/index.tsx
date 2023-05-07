import React from "react";
import { RowContainer } from "./RowContainer";

import { RowItem } from "./RowItem";

interface ILineUpList {
	list: {
		row1: string;
		row2: string[];
		row3: string[];
		row4: string[];
	};
}

export const LineUpList: React.FC<ILineUpList> = ({ list }) => {
	const { row1, row2, row3, row4 } = list;

	return (
		<div>
			<strong>{row1}</strong>
			<div className="text-center">
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
