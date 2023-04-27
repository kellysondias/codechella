import React, { ReactElement } from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { Button } from "../Button";
import { ImageRenderer } from "./ImageRenderer";

export type Image = {
	url: string;
	alt?: string;
};

type ButtonElement = {
	text: string;
	icon: string | ReactElement | IconDefinition;
};

interface ICard {
	image?: Image;
	title: string;
	text: string;
	button?: ButtonElement;
}

export const Card: React.FC<ICard> = ({ image, title, text, button }) => {
	const hasButton = Boolean(button);

	return (
		<div className="flex flex-wrap">
			<ImageRenderer customImage={image} />
			<div className="flex flex-col items-center justify-center text-center">
				<h2 className="text-3xl">{title}</h2>
				<p className="text-xl">{text}</p>
				{hasButton && <Button icon={button?.icon}>{button?.text}</Button>}
			</div>
		</div>
	);
};
