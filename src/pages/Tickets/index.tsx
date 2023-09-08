import React from "react";
import { Outlet } from "react-router-dom";
import TicketPage from "./TicketPage";

const Tickets = () => {
  return (
    <section>
      <TicketPage />
    </section>
  );
};

export default Tickets;
