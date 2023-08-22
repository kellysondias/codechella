import React from "react";
import type { Image } from "../../../Types/Image";
import alts from "./alts.json";
import classNames from "classnames";
import applyClasses from "../../../services/applyClasses";

interface Props {
  customImage?: Image;
  isList: boolean | undefined;
  index: number | undefined;
  smaller: boolean | undefined;
}

export const ImageRenderer: React.FC<Props> = ({
  customImage,
  isList,
  index,
  smaller,
}) => {
  const { url, alt } = customImage ?? {};
  const { summerAlt, borealAlt } = alts;

  const isFirstImage = index === 0;
  const hasCustomImage = Boolean(customImage);
  const hasAlt = Boolean(alt);

  const firstImageBorder = classNames({
    "xl:rounded-l-2xl": isList && isFirstImage,
    "rounded-2xl": !isList || !isFirstImage,
  });

  const size = {
    width: applyClasses(
      smaller,
      "w-72 md:w-96",
      "w-80 md:w-100 max-[346px]:w-56"
    ),
    height: applyClasses(smaller, "h-56 md:h-64", "h-96"),
    padding: applyClasses(smaller, "p-0", "h-96"),
  };

  return (
    <div className="flex justify-center">
      {hasCustomImage ? (
        <div className="align-rendered-image">
          <div
            style={{ backgroundImage: `url(${url})` }}
            className={`${size.width} ${size.height} ${size.padding} ${firstImageBorder} bg-cover bg-center bg-no-repeat`}
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
