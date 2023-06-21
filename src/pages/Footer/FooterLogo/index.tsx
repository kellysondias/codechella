import React from "react";
import footerLogo from "/assets/img//logos/footer-logo.svg";
import strings from "../../../strings";

export const FooterLogo: React.FC = () => {
  const logoAlt = strings.components.logo.logoAlt;

  return (
    <div className="w-56 flex justify-center mb-2 md:py-5 lg:pb-0">
      <img src={footerLogo} alt={logoAlt} />
    </div>
  );
};
