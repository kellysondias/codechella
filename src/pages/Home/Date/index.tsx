import React from "react";

import { Card } from "../../../components/Card";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

import strings from "../../../strings";

export const Date: React.FC = () => {
	const dateStrings = strings.pages.home.dates;

	const ticketButton = {
		children: dateStrings.button,
		icon: faTicket,
	};

	return (
		<div className="text-center">
			<Card
				button={ticketButton}
				title={dateStrings.title}
				text={dateStrings.text}
			/>
		</div>
	);
};
