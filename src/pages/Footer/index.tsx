import React from "react";
import { FooterLogo } from "./FooterLogo";
import { FooterLinks } from "./FooterLinks";
import { FooterCredits } from "./FooterCredits";

const Footer: React.FC = () => {
  return (
    <footer className="p-6 bg-summer-footer-bg dark:bg-boreal-footer-bg lg:px-14">
      <div className="flex-center flex-col lg:flex-row lg:justify-between">
        <div className="flex-center flex-col lg:items-start">
          <FooterLogo />
          <FooterLinks />
        </div>
        <FooterCredits />
      </div>
    </footer>
  );
};

export default Footer;
