import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import isDesktop from "../../../../services/functions/isDesktop";

interface IFooterListItem {
  url: string;
  icon: IconDefinition;
  key: number;
}

export const FooterListItem: React.FC<IFooterListItem> = ({
  url,
  icon,
  key,
}) => {
  return (
    <li key={key}>
      <a href={url} target="_blank" className={`${isDesktop && "hover"}`}>
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </a>
    </li>
  );
};
