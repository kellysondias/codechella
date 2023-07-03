import React from "react";
import headerLogo from "/assets/img//logos/header-logo.svg";
import content from "../../../content";

export const HeaderLogo: React.FC = () => {
  const logoAlt = content.components.logo.logoAlt;

  return (
    <div className="flex justify-center md:py-5">
      <img src={headerLogo} alt={logoAlt} />
    </div>
  );
};
