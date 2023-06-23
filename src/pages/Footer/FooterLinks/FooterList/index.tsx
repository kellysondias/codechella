import React from "react";
import { FooterListItem } from "../FooterListItem";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export const FooterList: React.FC<{
  list: { icon: IconDefinition; url: string }[];
}> = ({ list }) => (
  <ul className="flex-center mt-2 mb-8 space-x-2 md:m-0">
    {list.map((socialMedias, index) => {
      const { url, icon } = socialMedias;

      return <FooterListItem url={url} icon={icon} key={index} />;
    })}
  </ul>
);
