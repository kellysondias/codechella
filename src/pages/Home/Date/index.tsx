import React from "react";
import { Card } from "../../../components/Card";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import text from "./text.json";

export const Date: React.FC = () => {
  const { title, text: dateText, button: buttonText } = text;

  const ticketButton = {
    children: buttonText,
    icon: faTicket,
  };

  return (
    <div className="text-center">
      <Card
        button={ticketButton}
        title={title}
        text={dateText}
      />
    </div>
  );
};
