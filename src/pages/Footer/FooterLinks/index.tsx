import React from "react";
import content from "../../../content";
import { FooterList } from "./FooterList";

export const FooterLinks: React.FC = () => {
  const { heading, socialMediaArr } = content.pages.footer.footerLinks;

  return (
    <div className="flex-wrap md:flex md:mb-8">
      <span className="text-xl mr-2">{heading}</span>
      <FooterList list={socialMediaArr} />
    </div>
  );
};
