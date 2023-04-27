import React from "react";
import { Image } from "..";
import strings from "../../../strings";

interface IImageRenderer {
	customImage?: Image;
}

export const ImageRenderer: React.FC<IImageRenderer> = ({ customImage }) => {
	const url = customImage?.url;
	const alt = customImage?.alt;
	const imageRendererStrings = strings.components.card.imageRenderer;

	const hasImage = Boolean(customImage);
	const hasAlt = Boolean(customImage?.alt);

	const style = {
		customImage: "w-80 h-96 bg-cover bg-center bg-no-repeat rounded-lg my-8",
		align: "flex flex-col items-center",
	};

	return (
		<div className="flex justify-center w-full h-full">
			{hasImage ? (
				<div className={`${style.align}`}>
					<div
						style={{ backgroundImage: `url(${url})` }}
						className={`${style.customImage}`}
					/>
					{hasAlt && <span className="sr-only">{alt}</span>}
				</div>
			) : (
				<div className={`${style.align}`}>
					<div
						className={`${style.customImage} bg-summer-card dark:bg-boreal-card`}
					/>

					<span className="sr-only dark:hidden">
						{imageRendererStrings.summerAlt}
					</span>
					<span className="hidden dark:sr-only">
						{imageRendererStrings.borealAlt}
					</span>
				</div>
			)}
		</div>
	);
};
