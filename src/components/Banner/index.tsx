import React from "react";
import { HomeBanner } from "./HomeBanner";
import { BackgroundPosition } from "../../Types/BackgroundPosition";

interface Props {
  text: string;
  background: string;
  isHome?: boolean;
  position?: BackgroundPosition;
  bottomText?: string;
}

export const Banner: React.FC<Props> = ({
  text,
  background,
  isHome,
  position,
  bottomText,
}) => {
  const customPosition = position;

  const style = `w-full h-96 bg-no-repeat bg-cover bg-center ${customPosition}`;

  const textStyle =
    "flex justify-center flex-col text-center text-3xl text-summer-gray w-full h-full dark:text-boreal-hero sm:text-6xl";

  return (
    <>
      {isHome ? (
        <HomeBanner style={style} textStyle={textStyle} />
      ) : (
        <div className={`${style} ${background}`}>
          <h1 className={`${textStyle} dark:bg-black/40`}>
            <span className="sm:mb-4">{text}</span>
            {bottomText && <span>{bottomText}</span>}
          </h1>
        </div>
      )}
    </>
  );
};
