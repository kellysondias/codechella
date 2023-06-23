import React from "react";

import { Card } from "../../../components/Card";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

import content from "../../../content";

export const Date: React.FC = () => {
  const { title, text, button: buttonText } = content.pages.home.dates;

  const ticketButton = {
    children: buttonText,
    icon: faTicket,
  };

  return (
    <div className="text-center">
      <Card button={ticketButton} title={title} text={text} />
    </div>
  );
};
