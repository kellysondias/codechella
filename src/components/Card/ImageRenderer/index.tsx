import React from "react";
import type { Image } from "../../../Types/Image";
import alts from "./alts.json";
import classNames from "classnames";

interface Props {
  customImage?: Image;
  isList: boolean | undefined;
  index: number | undefined;
}

export const ImageRenderer: React.FC<Props> = ({
  customImage,
  isList,
  index,
}) => {
  const { url, alt } = customImage ?? {};
  const { summerAlt, borealAlt } = alts;

  const isFirstImage = index === 0;
  const hasCustomImage = Boolean(customImage);
  const hasAlt = Boolean(alt);

  const imageBorder = classNames({
    "xl:rounded-l-2xl": isList && isFirstImage,
    "rounded-2xl": !isList || !isFirstImage,
  });

  return (
    <div className="flex justify-center h-full">
      {hasCustomImage ? (
        <div className="align-rendered-image">
          <div
            style={{ backgroundImage: `url(${url})` }}
            className={`rendered-card-image ${imageBorder}`}
          />
          {hasAlt && <span className="sr-only">{alt}</span>}
        </div>
      ) : (
        <div className="align-rendered-image">
          <div className="rendered-default-image rounded-2xl" />

          <span className="sr-only dark:hidden">{summerAlt}</span>
          <span className="hidden dark:sr-only">{borealAlt}</span>
        </div>
      )}
    </div>
  );
};
