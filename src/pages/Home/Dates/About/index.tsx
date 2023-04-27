import React from "react";

import { Card } from "../../../../components/Card";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

import strings from "../../../../strings";

export const About: React.FC = () => {
	const aboutStrings = strings.pages.home.dates.about;

	const ticketButton = {
		text: aboutStrings.button,
		icon: faTicket,
	};

	return (
		<div className="flex flex-col flex-wrap text-center">
			<Card
				image={{
					url: "/assets/img/summer/summer-1.jpeg",
					alt: "Texto alternativo",
				}}
				button={ticketButton}
				title={aboutStrings.title}
				text={aboutStrings.text}
			/>
		</div>
	);
};
