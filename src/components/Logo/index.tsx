import React from "react";

export const Logo: React.FC<{ isFooterLogo?: boolean }> = ({
  isFooterLogo,
}) => {
  const alt = "Logo do Codechella";

  const logo = isFooterLogo
    ? "bg-black-logo dark:bg-white-logo"
    : "bg-white-logo";
  
  const link = !isFooterLogo && "/"

  return (
    <div className="flex justify-center md:py-5">
      <div className={`${logo} w-[234px] h-[64px]`} />
      <span className="sr-only">{alt}</span>
    </div>
  );
};
