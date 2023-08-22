import React from "react";

interface Props {
  isActive: boolean;
  isHidden: boolean;
  children: React.ReactNode;
}

export const StyledNav: React.FC<Props> = ({
  isActive,
  isHidden,
  children,
}) => {
  const navAnimation = isActive
    ? "flex"
    : `flex animate-back-out ${isHidden && "hidden"}`;

  return (
    <nav
      className={`menu-nav absolute text-white inline-block w-full h-full inset-0 justify-center items-center bg-summer-blue-100/10 dark:bg-boreal-blue-100/10 font-bold sm:static sm:bg-transparent sm:before:hidden sm:animate-none ${navAnimation} sm:flex sm:animate-none`}
    >
      {children}
    </nav>
  );
};
