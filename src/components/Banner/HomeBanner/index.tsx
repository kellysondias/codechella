import React from "react";
import data from "./data.json";

interface Props {
  style: string;
  textStyle: string;
}

export const HomeBanner: React.FC<Props> = ({ style, textStyle }) => {
  return (
    <div className={`${style} bg-summer-banner dark:bg-boreal-banner`}>
      <h2 className={`${textStyle} bg-white/25 dark:bg-transparent`}>
        <span className="sm:mb-4">{data.text}</span>
        <span>{data.bottomText}</span>
      </h2>
    </div>
  );
};
