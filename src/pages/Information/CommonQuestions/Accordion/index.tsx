import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown as arrow } from "@fortawesome/free-solid-svg-icons";
import { Link, To } from "react-router-dom";

interface Props {
  question: string;
  text: string;
  link?: {
    text: string;
    to: To;
  };
}

export const Accordion: React.FC<Props> = ({ question, text, link }) => {
  const [isActive, setIsActive] = useState(false);
  const activeState = isActive && "is-active";

  return (
    <div className="list p-1 only:p-0 first:pt-0 last:pb-0 md:w-[40rem] lg:w-[60rem] ">
      <div
        className={`bg-summer-blue-100 dark:bg-boreal-blue-100 cursor-pointer group 
        ${activeState}
      `}
      >
        <div
          className="flex justify-between items-center p-4"
          onClick={() => setIsActive(!isActive)}
        >
          <h3 className="font-text text-left text-2xl w-60 font-bold text-white md:w-full md:text-3xl">
            {question}
          </h3>
          <FontAwesomeIcon
            icon={arrow}
            className="text-white group-[.is-active]:rotate-[270deg]"
          />
        </div>
        <div className="overflow-hidden max-h-0 cursor-default text-gray-800 text-xl bg-[#C8DEEF] group-[.is-active]:max-h-[280px] group-[.is-active]:p-4">
          <p className="md:inline md:pr-1">{text}</p>
          <Link to={`${link?.to}`}>
            <p className="inline border-b border-gray-700">{link?.text}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
// p-4
