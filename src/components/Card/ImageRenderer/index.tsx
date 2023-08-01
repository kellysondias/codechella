import React from "react";
import type { Image } from "../../../Types/Image";
import alts from "./alts.json";

export const ImageRenderer: React.FC<{ customImage?: Image }> = ({
  customImage,
}) => {
  const { url, alt } = customImage ?? {};
  const { summerAlt, borealAlt } = alts;

  const hasCustomImage = Boolean(customImage);
  const hasAlt = Boolean(alt);

  return (
    <div className="flex justify-center h-full">
      {hasCustomImage ? (
        <div className="align-rendered-image">
          <div
            style={{ backgroundImage: `url(${url})` }}
            className="align-rendered-image"
          />
          {hasAlt && <span className="sr-only">{alt}</span>}
        </div>
      ) : (
        <div className="align-rendered-image">
          <div className="rendered-default-image" />

          <span className="sr-only dark:hidden">{summerAlt}</span>
          <span className="hidden dark:sr-only">{borealAlt}</span>
        </div>
      )}
    </div>
  );
};
