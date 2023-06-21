import React from "react";
import headerLogo from "/assets/img//logos/header-logo.svg";
import strings from "../../../strings";

export const HeaderLogo: React.FC = () => {
  const logoAlt = strings.components.logo.logoAlt;

  return (
    <div className="flex justify-center md:py-5">
      <img src={headerLogo} alt={logoAlt} />
    </div>
  );
};
