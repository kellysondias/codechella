import React from "react";

import { Button } from "../../../../components/Button";
import { Card } from "../../../../components/Card";

import { faTicket } from "@fortawesome/free-solid-svg-icons";

import strings from "../../../../strings";

export const About = () => {
	const aboutStrings = strings.pages.home.dates.about;
    const icon = faTicket
	const image = {
		src: "https://pbs.twimg.com/media/EShHsv6WkAAa1ip.jpg",
		alt: "PAH",
	};
	return (
		<div className="">
			<Card
				image={image}
				title={aboutStrings.title}
				text={aboutStrings.text}
			/>
			<Button icon={icon}>{aboutStrings.button}</Button>
		</div>
	);
};
