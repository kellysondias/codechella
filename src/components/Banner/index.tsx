import React from "react";

interface Props {
  text: string;
  blur?: string;
  borealBlur?: string;
  bottomText?: string;
  background: string;
  borealBackground?: string;
}

export const Banner: React.FC<Props> = ({
  text,
  blur,
  borealBlur,
  bottomText,
  background,
  borealBackground,
}) => {
  const hasBorealBg = Boolean(borealBackground);
  const hasborealBlur = Boolean(borealBlur);

  const borealBg = hasBorealBg && `dark:${borealBackground}`;

  const borealBl = hasborealBlur
    ? `dark:${borealBlur}/25`
    : `dark:bg-transparent`;

  return (
    <div
      className={`w-full h-96 bg-no-repeat bg-cover bg-center ${background} ${borealBg}`}
    >
      <h2
        className={`flex justify-center flex-col text-center text-3xl text-summer-gray w-full h-full dark:text-boreal-hero sm:text-6xl ${blur}/25 ${borealBl}`}
      >
        <span className="sm:mb-4">{text}</span>
        <span>{bottomText}</span>
      </h2>
    </div>
  );
};
