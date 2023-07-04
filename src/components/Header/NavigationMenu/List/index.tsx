import React from "react";

interface ListProps {
  isActive: boolean;
  children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ isActive, children }) => {
  const listAnimation = isActive
    ? "animate-back-in-down"
    : "animate-back-out-up";

  return <ul className={`${listAnimation} menu-list`}>{children}</ul>;
};
