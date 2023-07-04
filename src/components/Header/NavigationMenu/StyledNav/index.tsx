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
}) => {
  const menuAnimation = isActive
    ? "flex"
    : `flex animate-back-out ${isHidden && "hidden"}`;

  return <nav className={`${menuAnimation} menu-nav`}>{children}</nav>;
};
