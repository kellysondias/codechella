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
  const navAnimation = isActive
    ? "flex"
    : `flex animate-back-out ${isHidden && "hidden"}`;

  return <nav className={`${navAnimation} menu-nav`}>{children}</nav>;
};
