import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { ButtonComponent } from "../../Types/ButtonComponent";

export const Button: React.FC<ButtonComponent> = ({ ...props }) => (
  <button type={props.type} className={`button ${props.classes}`} {...props}>
    <b className="mr-4 ab">{props.children}</b>
    {props.icon && (
      <FontAwesomeIcon icon={props.icon} className="text-lg sm:text-2xl" />
    )}
  </button>
);
