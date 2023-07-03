import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import content from "../../../content";
import routes from "./routes.json";

import { List } from "./List";
import { StyledNav } from "./StyledNav";
import { MobileMenu } from "./MobileMenu";

export const NavigationMenu: React.FC = () => {
  const navMenu = content.pages.header.navigationMenu;

  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const doc = document.getElementById("doc");
  const docClasses = doc!.classList;

  const handleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isActive) {
      setIsHidden(false);
      docClasses.add("overflow-hidden");
    } else {
      docClasses.remove("overflow-hidden");
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
          {routes.map((route, index) => (
            <li key={index} className="menu-item">
              <Link to={route.to} onClick={() => setIsActive(false)}>
                {route.label}
              </Link>
            </li>
          ))}
        </List>
      </StyledNav>
    </div>
  );
};
