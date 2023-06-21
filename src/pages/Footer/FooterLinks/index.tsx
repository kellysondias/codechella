import React from "react";
import strings from "../../../strings";
import { FooterList } from "./FooterList";

export const FooterLinks: React.FC = () => {
  const heading = strings.pages.footer.footerLinks.heading;
  const list = strings.pages.footer.footerLinks.socialMediaArr

  return (
    <div className="flex-wrap md:flex md:mb-8">
      <span className="text-xl mr-2">{heading}</span>
      <FooterList list={list}/>
    </div>
  );
};
