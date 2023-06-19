import React from "react";

export const LineUpHeader: React.FC<{ date: string }> = ({ date }) => (
  <div className="flex justify-center items-center sm:space-x-7">
    <div className="line-up-header-line" />
    <h3 className="line-up-header">{date}</h3>
    <div className="line-up-header-line" />
  </div>
);
