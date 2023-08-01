import React from "react";
import { Date } from "./Date";
import { LineUp } from "./LineUp";
import { Hero } from "./Hero";
import heroText from "./banner-text.json";

const Home: React.FC = () => (
  <main className="bg-gradient">
    <Hero text={heroText.line1} bottomText={heroText.line2} />
    <Date />
    <LineUp />
  </main>
);

export default Home;
