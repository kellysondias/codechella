import React, { ReactNode } from "react";

type Image = {
	src: string;
	alt: string;
};

interface ICard {
	image: Image;
	title: string;
	text: string;
}

export const Card: React.FC<ICard> = ({ image, title, text }) => (
	<div>
		<div>
			<img
				src={image.src}
				alt={image.alt}
			/>
		</div>
		<h2>{title}</h2>
		<p>{text}</p>
	</div>
);
