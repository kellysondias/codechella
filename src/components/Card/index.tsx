import React from "react";
import { Button } from "../Button";
import { ImageRenderer } from "./ImageRenderer";
import type { Image } from "../../Types/Image";
import type { ButtonComponent } from "../../Types/ButtonComponent";

interface Props {
  image?: Image;
  title: string;
  text: string;
  button?: ButtonComponent;
  listIndex?: number;
}

export const Card: React.FC<Props> = ({
  image,
  title,
  text,
  button,
  listIndex,
}) => {
  const hasButton = Boolean(button);

  // const isList = Boolean(listIndex !== undefined && listIndex > 0);

  // const listStyle = isList && "lg:first:bg-red-700 lg:odd:flex-row-reverse lg:odd:only:flex-row";

  return (
    <div
      className={`flex flex-wrap justify-center items-center mx-16 py-20 max-[1257px]:py-8 lg:odd:flex-row-reverse lg:odd:only:flex-row lg:first:bg-red-700`}
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
