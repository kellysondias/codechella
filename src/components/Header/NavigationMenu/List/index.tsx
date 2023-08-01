import React from "react";

interface Props {
  isActive: boolean;
  children: React.ReactNode;
}

export const List: React.FC<Props> = ({ isActive, children }) => {
  const listAnimation = isActive
    ? "animate-back-in-down"
    : "animate-back-out-up";

  return (
    <ul className={`menu-list ${listAnimation} sm:animate-none`}>{children}</ul>
  );
};
