import React, { useState, useEffect } from "react";

import strings from "../../../strings";

import { List } from "./List";
import { StyledNav } from "./StyledNav";
import { MobileMenu } from "./MobileMenu";

export const NavigationMenu: React.FC = () => {
  const navStrings = strings.pages.header.navigationMenu;

  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const doc = document.getElementById("doc");
  const pageClasses = doc!.classList;

  const handleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      setIsHidden(false);
      pageClasses.add("overflow-hidden");
    } else {
      pageClasses.remove("overflow-hidden");
      const timeoutId = setTimeout(() => {
        setIsHidden(true);
      }, 400);
      return () => clearTimeout(timeoutId);
    }
  }, [isActive]);

  return (
    <div className="flex">
      <MobileMenu isActive={isActive} onClick={handleMenu} />
      <StyledNav isActive={isActive} isHidden={isHidden}>
        <List isActive={isActive}>
          {navStrings.map((text, index) => (
            <li key={index} className="menu-item">
              {text}
            </li>
          ))}
        </List>
      </StyledNav>
    </div>
  );
};
