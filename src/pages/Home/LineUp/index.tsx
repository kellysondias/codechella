import React from "react";
import text from "./text.json";
import { LineUpSection } from "./LineUpSection";
import { LineUpFooter } from "./LineUpFooter";

export const LineUp: React.FC = () => {
  const { heading, dates, lineUpCard: rows } = text;

  return (
    <section className="flex flex-col justify-center items-center text-center text-summer-gray dark:text-white" id="line-up">
      <h2 className="text-5xl pb-8" >{heading}</h2>
      <LineUpSection date={dates.firstDate} lists={rows.firstList} />
      <LineUpSection date={dates.secondDate} lists={rows.secondList} />
    </section>
  );
};
