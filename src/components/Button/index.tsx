import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { ButtonComponent } from "../../Types/ButtonComponent";

export const Button: React.FC<ButtonComponent> = (
  { type, buttonclasses, children, icon },
  { ...props }
) => (
  <button type={type ?? "submit"} className={`button ${buttonclasses}`} {...props}>
    <b className="mr-4 ab">{children}</b>
    {icon && <FontAwesomeIcon icon={icon} className={`text-lg sm:text-2xl`} />}
  </button>
);
