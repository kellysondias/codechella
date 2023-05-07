import React, { ReactNode } from "react";

export const RowContainer: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	return (
		<ul className="flex-center flex-wrap font-bold [&:last-child]:font-normal">
			{children}
		</ul>
	);
};
