import React from "react";

type Image = {
	src: string;
	alt: string;
};

interface ICard {
	image: Image;
	title: string;
	text: string;
	isAbout?: boolean;
}

export const Card: React.FC<ICard> = ({ image, title, text, isAbout }) => (
	<div className="flex flex-col justify-center items-center">
		<div className="h-full w-full">
			{isAbout ? (
				<div className="bg-summer-about dark:bg-boreal-about w-full h-96 bg-contain bg-no-repeat" />
			) : (
				<img
					src={image.src}
					alt={image.alt}
				/>
			)}
		</div>
		<h2>{title}</h2>
		<p>{text}</p>
	</div>
);
