import React from "react";

interface StyledNavProps {
  isActive: boolean;
  isHidden: boolean;
  children: React.ReactNode;
}

export const StyledNav: React.FC<StyledNavProps> = ({
  isActive,
  isHidden,
  children,
}) => (
  <nav
    className={`${
      isActive ? "flex" : `flex animate-back-out ${isHidden && "hidden"} `
    } absolute text-white inline-block w-full h-full inset-0 justify-center items-center bg-summer-blue-100/10 dark:bg-boreal-blue-100/10 font-bold sm:block sm:static sm:bg-transparent sm:before:hidden sm:animate-none`}
  >
    {children}
  </nav>
);
