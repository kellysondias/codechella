import React from "react";
import data from "./data.json";
import { Card } from "../../../components/Card";

export const LaneDetails: React.FC = () => {
  const { cards } = data;

  return (
    <div className="flex-center flex-col md:mt-6 lg:mt-20">
      <h3 className="font-text text-center font-bold self-center text-lg min-[360px]:text-3xl min-[360px]:w-80 md:text-4xl md:w-100">
        {data.title}
      </h3>
      <div className="flex-center pb-12 w-full max-md:flex-col max-[1435px]:flex-col">
        {cards.map((content) => (
          <Card
            smaller
            image={content.image}
            title={content.title}
            text={content.text}
            key={content.id}
          />
        ))}
      </div>
    </div>
  );
};
