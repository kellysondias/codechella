import React from "react";

import { LineUpList } from "./LineUpList";
import { LineUpHeader } from "./LineUpHeader";

interface ILineUpSection {
  date: string;
  lists: {
    row1: string;
    row2: string[];
    row3: string[];
    row4: string[];
  };
}

export const LineUpSection: React.FC<ILineUpSection> = ({ date, lists }) => {
  return (
    <div className="text-center">
      <LineUpHeader date={date} />
      <LineUpList lists={lists} />
    </div>
  );
};
