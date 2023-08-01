import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import isDesktop from "../../../../services/functions/isDesktop";

interface Props {
  url: string;
  icon: IconDefinition;
}

export const FooterListItem: React.FC<Props> = ({ url, icon }) => {
  return (
    <li>
      <a href={url} target="_blank" className={`${isDesktop && "hover"}`}>
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </a>
    </li>
  );
};
