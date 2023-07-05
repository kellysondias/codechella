import React from "react";

import { Hero } from "../Home/Hero";
import { Date } from "./Date";
import { LineUp } from "./LineUp";

const Home: React.FC = () => (
  <main className="bg-gradient">
    <Hero />
    <Date />
    <LineUp />
  </main>
);

export default Home;
