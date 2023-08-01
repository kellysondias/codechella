import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars as menuIcon,
  faX as closeMenuIcon,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  onClick: () => void;
  isActive: boolean;
}

export const MobileMenu: React.FC<Props> = ({ onClick, isActive }) => (
  <div className="z-50 cursor-pointer text-white text-3xl sm:hidden w-10 h-10">
    {isActive ? (
      <FontAwesomeIcon icon={closeMenuIcon} onClick={onClick} />
    ) : (
      <FontAwesomeIcon icon={menuIcon} onClick={onClick} />
    )}
  </div>
);
