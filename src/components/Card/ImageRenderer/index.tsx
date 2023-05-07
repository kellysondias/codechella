import React from "react";

import type { Image } from "../../../Types/Image";

import strings from "../../../strings";

export const ImageRenderer: React.FC<{ customImage?: Image }> = ({ customImage }) => {
	const url = customImage?.url;
	const alt = customImage?.alt;

	const imageRendererStrings = strings.components.card.imageRenderer;

	const hasCustomImage = Boolean(customImage);
	const hasAlt = Boolean(customImage?.alt);

	return (
		<div className="flex justify-center h-full">
			{hasCustomImage ? (
				<div className="align-rendered-image">
					<div
						style={{ backgroundImage: `url(${url})` }}
						className="rendered-image"
					/>
					{hasAlt && <span className="sr-only">{alt}</span>}
				</div>
			) : (
				<div className="align-rendered-image">
					<div className="rendered-default-image" />

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
