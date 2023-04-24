import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ ...props }) => (
	<button {...props}>
		{props.children} {props.icon && <FontAwesomeIcon icon={props.icon} />}
	</button>
);
