import React from "react";

import { Button } from "../Button";
import { ImageRenderer } from "./ImageRenderer";

import type { Image } from "../../Types/Image";
import type { ButtonComponent } from "../../Types/ButtonComponent";

interface ICard {
	image?: Image;
	title: string;
	text: string;
	button?: ButtonComponent;
}

export const Card: React.FC<ICard> = ({ image, title, text, button }) => {
	const hasButton = Boolean(button);
	// max-[1257px]:flex-wrap
	return (
		<div className="flex flex-wrap justify-center items-center mx-16 py-28 max-[1257px]:py-8">
			<ImageRenderer customImage={image} />
			<div className="card-text lg:w-[40%]">
				<h2 className="text-3xl my-6 md:mx-20 lg:mx-0">{title}</h2>
				<p className="text-xl leading-loose">{text}</p>
				{hasButton && <Button icon={button?.icon}>{button?.children}</Button>}
			</div>
		</div>
	);
};
