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

  return <nav className={`menu-nav ${navAnimation} sm:flex sm:animate-none`}>{children}</nav>;
};
