import React from "react";
import { Banner } from "../../../components/Banner";

export const Hero: React.FC<{ text: string; bottomText?: string }> = ({
  text,
  bottomText,
}) => (
  <Banner
    text={text}
    bottomText={bottomText}
    blur="bg-white"
    background="bg-summer-banner"
    borealBackground="bg-boreal-banner"
  />
);
