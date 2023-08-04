import React from "react";
import { HomeBanner } from "./HomeBanner";
import Home from "../../pages/Home";

interface Props {
  text: string;
  blur?: string;
  borealBlur?: string;
  bottomText?: string;
  background: string;
  isHome?: boolean;
}

export const Banner: React.FC<Props> = ({
  text,
  blur,
  borealBlur,
  bottomText,
  background,
  isHome,
}) => {
  const hasBorealBlur = Boolean(borealBlur);

  const style = "w-full h-96 bg-no-repeat bg-cover bg-center";

  const textStyle =
    "flex justify-center flex-col text-center text-3xl text-summer-gray w-full h-full dark:text-boreal-hero sm:text-6xl";

  const borealBl = hasBorealBlur ? `${borealBlur}` : "";

  return (
    <>
      {isHome ? (
        <HomeBanner style={style} textStyle={textStyle} />
      ) : (
        <div className={`${style} ${background}`}>
          <h2 className={`${textStyle} ${blur}/25 dark:${borealBl}`}>
            <span className="sm:mb-4">{text}</span>
            {bottomText && <span>{bottomText}</span>}
          </h2>
        </div>
      )}
    </>
  );
};
