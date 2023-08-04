import React from "react";
import { Banner } from "../../../components/Banner";
import bannerText from "./banner-text.json";

export const Hero: React.FC = () => (
  <Banner
    isHome
    text={bannerText.line1}
    bottomText={bannerText.line2}
    blur="bg-red-700"
    borealBlur="bg-blue-700"
    background="bg-summer-banner"
  />
);
