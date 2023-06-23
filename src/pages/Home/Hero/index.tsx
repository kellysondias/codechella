import React from "react";

import content from "../../../content";

export const Hero: React.FC = () => {
  const heroText = content.pages.home.hero;

  return (
    <section className="bg-summer-banner w-full h-96 bg-no-repeat bg-cover bg-center dark:bg-boreal-banner">
      <h2 className="flex justify-center flex-col text-center text-3xl text-summer-gray w-full h-full bg-white/25 dark:bg-transparent dark:text-boreal-hero sm:text-6xl">
        <span className="sm:mb-4">{heroText.line1}</span>
        <span>{heroText.line2}</span>
      </h2>
    </section>
  );
};
