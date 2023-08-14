import React from "react";
import { Banner } from "../../../components/Banner";
import data from "./data.json";

export const Hero: React.FC = () => (
  <div>
    <Banner
      background="bg-map-banner"
      text={data.text}
      position="bg-right-bottom"
      borealBlur="bg-black"
    />
    <div>cccc</div>
  </div>
);
