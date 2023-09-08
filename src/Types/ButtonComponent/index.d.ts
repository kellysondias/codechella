import { Icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ButtonComponent = {
	children: string | undefined;
	icon?: Icon | IconDefinition;
	buttonClasses?: string | undefined;
	type?: button | submit | reset | undefined;
};
