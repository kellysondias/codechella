import React from "react";
import { Banner } from "../../../components/Banner";
import bannerText from "./banner-text.json";

export const Hero: React.FC = () => (
  <Banner
    background=""
    text={bannerText.text}
    blur="bg-white"
    borealBlur="bg-black"
  />
);
