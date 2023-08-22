import React from "react";
import { Hero } from "./Hero";
import { Map } from "./Map";
import { LaneDetails } from "./LaneDetails";

const MapPage: React.FC = () => {
  return (
    <section>
      <Hero />
      <Map />
      <LaneDetails />
    </section>
  );
};

export default MapPage;
