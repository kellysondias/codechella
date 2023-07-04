import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List } from "./List";
import { StyledNav } from "./StyledNav";
import { MobileMenu } from "./MobileMenu";
import routes from "./routes.json";
import ScrollHandler from "./ScrollHandler";

// Trocar isHidden

export const NavigationMenu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const handleMenu = () => setIsActive(!isActive);
  const handleScroll = new ScrollHandler();

  useEffect(() => {
    if (isActive) {
      setIsHidden(false);
      handleScroll.disable();
    } else {
      handleScroll.enable();
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
              <a href={route.to} onClick={() => setIsActive(false)}>
                {route.label}
              </a>
            </li>
          ))}
        </List>
      </StyledNav>
    </div>
  );
};
