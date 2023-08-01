import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faSun } from "@fortawesome/free-solid-svg-icons";

export const ThemeToggleButton: React.FC = () => {
  const systemPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const root = document.getElementById("root");
  const rootClasses = root!.classList;

  useEffect(() => {
    systemPreference && rootClasses.add("dark");
  }, []);

  const toggle = () => rootClasses.toggle("dark");

  return (
    <div className="text-center hidden absolute md:static right-5 top-5 md sm:block">
      <FontAwesomeIcon
        icon={faSun}
        className="hidden dark:inline-block h-5 text-white cursor-pointer md:h-7"
        onClick={toggle}
      />
      <FontAwesomeIcon
        icon={faSnowflake}
        className="dark:hidden h-5 text-white cursor-pointer md:h-7"
        onClick={toggle}
      />
    </div>
  );
};
