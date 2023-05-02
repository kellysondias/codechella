import React from "react";

import { Card } from "../../../../components/Card";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

import strings from "../../../../strings";

export const About: React.FC = () => {
	const aboutStrings = strings.pages.home.dates.about;

	const ticketButton = {
		children: aboutStrings.button,
		icon: faTicket,
	};

	return (
		<div className="text-center">
			<Card
				button={ticketButton}
				title={aboutStrings.title}
				text={aboutStrings.text}
			/>
		</div>
	);
};
