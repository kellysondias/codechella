import React from "react";
import { HomeBanner } from "./HomeBanner";
import { BackgroundPosition } from "../../Types/BackgroundPosition";

interface Props {
  text: string;
  background: string;
  blur?: string;
  isHome?: boolean;
  position?: BackgroundPosition;
  borealBlur?: string;
  bottomText?: string;
}

export const Banner: React.FC<Props> = ({
  text,
  background,
  blur,
  isHome,
  position,
  borealBlur,
  bottomText,
}) => {
  const hasBorealBlur = Boolean(borealBlur);
  const customPosition = position;

  const style = `w-full h-96 bg-no-repeat bg-cover bg-center ${customPosition}`;

  const textStyle =
    "flex justify-center flex-col text-center text-3xl text-summer-gray w-full h-full dark:text-boreal-hero sm:text-6xl";

  const summerBl = blur ? `${blur}/25` : "bg-transparent";

  const borealBl = hasBorealBlur ? borealBlur : "";

  return (
    <>
      {isHome ? (
        <HomeBanner style={style} textStyle={textStyle} />
      ) : (
        <div className={`${style} ${background}`}>
          <h2 className={`${textStyle} ${summerBl} dark:${borealBl}`}>
            <span className="sm:mb-4">{text}</span>
            {bottomText && <span>{bottomText}</span>}
          </h2>
        </div>
      )}
    </>
  );
};
