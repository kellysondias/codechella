import React, { ReactElement } from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { Button } from "../Button";

type Image = {
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
		<div className="text-center">
			<div className="flex justify-center w-full h-full">
				{image ? (
					<>
						<div
							className={`bg-[url('${image?.url}')] w-64 h-96 bg-contain bg-no-repeat rounded-lg`}
						>
							{/*<img
								src={image?.src}
								alt={image?.alt}
							/> */}
						</div>
						{image.alt && <span>{image.alt}</span>}
					</>
				) : (
					<div className="bg-summer-card w-64 h-96 bg-contain bg-no-repeat rounded-lg dark:bg-boreal-card dark:h-40" />
				)}
			</div>
			<div>
				<h2 className="text-3xl">{title}</h2>
				<p className="text-xl">{text}</p>
				{hasButton && <Button icon={button?.icon}>{button?.text}</Button>}
			</div>
		</div>
	);
};
