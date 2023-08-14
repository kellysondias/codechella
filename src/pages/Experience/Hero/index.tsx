import React from "react";
import { Banner } from "../../../components/Banner";
import data from "./data.json";

export const Hero: React.FC = () => (
  <Banner
    background="bg-experience-banner"
    text={data.text}
    borealBlur="bg-black"
  />
);
