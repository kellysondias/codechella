import { Icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";

type CardButton = {
  children: string | undefined;
  link: To;
  icon?: Icon | IconDefinition;
};

export default CardButton;
