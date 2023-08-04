import React from "react";
import { Date } from "./Date";
import { LineUp } from "./LineUp";
import { Hero } from "./Hero";

const Home: React.FC = () => (
  <section>
    <Hero />
    <Date />
    <LineUp />
  </section>
);

export default Home;
