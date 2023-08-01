import React from "react";
import { FooterListItem } from "../FooterListItem";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface Props {
  list: {
    icon: IconDefinition;
    url: string;
    id: number;
  }[];
}

export const FooterList: React.FC<Props> = ({ list }) => (
  <ul className="flex-center mt-2 mb-8 space-x-2 md:m-0">
    {list.map((socialMedias) => {
      const { url, icon, id } = socialMedias;

      return <FooterListItem url={url} icon={icon} key={id} />;
    })}
  </ul>
);
