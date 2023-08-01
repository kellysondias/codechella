import React from "react";
import text from "./text.json";
import isDesktop from "../../../services/functions/isDesktop";

export const FooterCredits: React.FC = () => {
  const { url, text: creditsText } = text;

  return (
    <div>
      <p className="text-center text-xl flex-col lg:flex lg:text-left">
        <span className="block">
          <span>{creditsText.line1}</span>
          <a href={url} target="_blank" className={`${isDesktop && "hover"}`}>
            <span>{creditsText.dev}</span>
          </a>
        </span>
        <span>{creditsText.line2}</span>
      </p>
    </div>
  );
};
