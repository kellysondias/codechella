import React from "react";
import { Outlet } from "react-router-dom";
import TicketForm from "./TicketForm";

const Tickets = () => {
  return (
    <section>
      <TicketForm />
    </section>
  );
};

export default Tickets;
