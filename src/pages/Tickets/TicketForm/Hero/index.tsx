import React from "react";
import { Banner } from "../../../../components/Banner";
import data from "./data.json";

export const Hero: React.FC = () => (
  <Banner text={data.text} background="bg-ticket-form-banner" />
);
