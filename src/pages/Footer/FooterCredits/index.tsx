import React from "react";
import content from "../../../content";
import isMobile from "../../../services/functions/isMobile";

export const FooterCredits: React.FC = () => {
  const { url, text } = content.pages.footer.credits;

  return (
    <div>
      <p className="text-center text-xl flex-col lg:flex lg:text-left">
        <div>
          <span>{text.line1}</span>
          <a href={url} target="_blank" className={`${!isMobile && "hover"}`}>
            <span>{text.dev}</span>
          </a>
        </div>
        <span>{text.line2}</span>
      </p>
    </div>
  );
};
