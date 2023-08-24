import React from "react";
import data from "./data.json";
import { Accordion } from "./Accordion";

export const CommonQuestions: React.FC = () => {
  const { title, questions } = data;

  return (
    <div className="flex-center flex-col py-12 px-8">
      <h2 className="text-center dark:text-white text-3xl w-72 sm:w-full md:text-5xl">{title}</h2>
      <div className="mt-12">
        {questions.map((answer) => (
          <Accordion
            question={answer.question}
            text={answer.text}
            key={answer.id}
            link={answer.link}
          />
        ))}
      </div>
    </div>
  );
};
