import React from "react";
import { TicketForm } from "./TicketForm";
import data from "./data.json";
import { Hero } from "./Hero";

const TicketPage: React.FC = () => {
  return (
    <section>
      <Hero />
      <div className="py-8">
        <h1 className="my-0 mx-auto text-center text-2xl sm:w-80 md:w-96 md:text-3xl lg:w-full dark:text-white">
          {data.title}
        </h1>
        <TicketForm />
      </div>
    </section>
  );
};

export default TicketPage;
