import React from "react";

type Image = {
	src: string;
	alt: string;
};

interface ICard {
	image?: Image;
	title: string;
	text: string;
}

export const Card: React.FC<ICard> = ({ image, title, text }) => (
	<div className="flex flex-col justify-center items-center">
		<div className="h-full w-full">
			{image ? (
				<img
					src={image?.src}
					alt={image?.alt}
				/>
			) : (
				<div className="bg-summer-about dark:bg-boreal-about w-full h-96 bg-contain bg-no-repeat" />
			)}
		</div>
		<h2>{title}</h2>
		<p>{text}</p>
	</div>
);
