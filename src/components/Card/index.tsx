import React from "react";
import { Button } from "../Button";
import { ImageRenderer } from "./ImageRenderer";
import type { Image } from "../../Types/Image";
import type { ButtonComponent } from "../../Types/ButtonComponent";

interface Props {
  isList?: boolean;
  image?: Image;
  title: string;
  text: string;
  button?: ButtonComponent;
}

export const Card: React.FC<Props> = ({
  isList,
  image,
  title,
  text,
  button,
}) => {
  const hasButton = Boolean(button);

  const listStyle = isList && "first:bg-blue-700 lg:odd:flex-row-reverse";

  return (
    <div
      className={`flex flex-wrap justify-center items-center mx-16 py-20 max-[1257px]:py-8 ${listStyle}`}
    >
      <ImageRenderer customImage={image} />
      <div className="card-text lg:w-[40%]">
        <h2 className="text-3xl my-6 md:mx-20 lg:mx-0">{title}</h2>
        <p className="text-xl leading-loose">{text}</p>
        {hasButton && <Button icon={button?.icon}>{button?.children}</Button>}
      </div>
    </div>
  );
};
