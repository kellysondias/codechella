import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import isMobile from "../../../../services/functions/isMobile";

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
      <a href={url} target="_blank" className={`${!isMobile && "hover"}`}>
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </a>
    </li>
  );
};
