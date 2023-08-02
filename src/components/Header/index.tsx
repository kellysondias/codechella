import React from "react";
import { NavigationMenu } from "./NavigationMenu";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";

export const Header: React.FC = () => (
  <header className="bg-summer-blue-100 flex flex-row justify-evenly items-center text-center dark:bg-boreal-blue-100 sm:flex-col md:px-3 md:flex-row z-50 lg:px-0">
    <Link to="/">
      <Logo />
    </Link>
    <NavigationMenu />
    <ThemeToggleButton />
  </header>
);
