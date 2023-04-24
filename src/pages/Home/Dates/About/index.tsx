import React from "react";

import { Button } from "../../../../components/Button";
import { Card } from "../../../../components/Card";

import { faTicket } from "@fortawesome/free-solid-svg-icons";

import strings from "../../../../strings";

export const About = () => {
	const aboutStrings = strings.pages.home.dates.about;
	const isAbout = true;
	const icon = faTicket;
	const image = {
		src: "/assets/img/summer/summer-1.jpeg",
		alt: "PAH",
	};
	return (
		<div className="">
			<Card
				image={image}
				title={aboutStrings.title}
				text={aboutStrings.text}
                isAbout
			/>
			<Button icon={icon}>{aboutStrings.button}</Button>
		</div>
	);
};
