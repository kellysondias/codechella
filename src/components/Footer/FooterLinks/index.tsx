import React from "react";
import data from "./data";
import { FooterList } from "./FooterList";

export const FooterLinks: React.FC = () => {
  const { heading, socialMediaArr } = data;

  return (
    <div className="flex-wrap md:flex md:mb-8">
      <span className="text-xl mr-2">{heading}</span>
      <FooterList list={socialMediaArr} />
    </div>
  );
};
