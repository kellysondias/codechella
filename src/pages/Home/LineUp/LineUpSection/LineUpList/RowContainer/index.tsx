import React, { ReactNode } from "react";

export const RowContainer: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	return (
		<ul className="row-container">
			{children}
		</ul>
	);
};
