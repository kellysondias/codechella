import React from "react";
import { FooterLinks } from "./FooterLinks";
import { FooterCredits } from "./FooterCredits";
import { Logo } from "../Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="p-6 bg-summer-footer-bg dark:bg-boreal-footer-bg dark:text-white lg:px-14">
      <div className="flex-center flex-col lg:flex-row lg:justify-between">
        <div className="flex-center flex-col lg:items-start">
          <Logo isFooterLogo />
          <FooterLinks />
        </div>
        <FooterCredits />
      </div>
    </footer>
  );
};