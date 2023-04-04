import React from "react";

interface ListItemProps {
	index: number;
	list: Array<string>;
	children: string;
}

export const ListItem: React.FC<ListItemProps> = ({
	index,
	list,
	children,
}) => {
	const lastItem = list.length - 1;
	return (
		<li
			key={index}
			className={`w-full ${
				index !== lastItem
					? "border-b-2 border-white pb-2 mb-3"
					: index == lastItem
					? "pb-0 mb-0"
					: ""
			} sm:w-auto sm:border-none `}
		>
			<>{children}</>
		</li>
	);
};
