import { Icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";

type CardButton = {
  children: string | undefined;
  to: To;
  icon?: Icon | IconDefinition;
};

export default CardButton;
