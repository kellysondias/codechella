import React from "react";

import { Button } from "../../../../components/Button";
import { Card } from "../../../../components/Card";

import { faTicket } from "@fortawesome/free-solid-svg-icons";

import strings from "../../../../strings";

export const About = () => {
	const aboutStrings = strings.pages.home.dates.about;
	const icon = faTicket;
	const image = {
		src: "/assets/img/summer/summer-1.jpeg",
		alt: "PAH",
	};
	return (
		<div className="">
			<Card
				title={aboutStrings.title}
				text={aboutStrings.text}
			/>
			<Button icon={icon}>{aboutStrings.button}</Button>
		</div>
	);
};
