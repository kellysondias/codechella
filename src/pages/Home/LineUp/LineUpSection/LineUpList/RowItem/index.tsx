import React from "react";

export const RowItem: React.FC<{ row: string[] }> = ({ row }) => {
	return (
		<>
			{row.map((item, index) => (
				<li
					key={index}
					className="mx-5"
				>
					{item}
				</li>
			))}
		</>
	);
};
