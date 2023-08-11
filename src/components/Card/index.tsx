import React from "react";
import { Button } from "../Button";
import { ImageRenderer } from "./ImageRenderer";
import type { Image } from "../../Types/Image";
import type { ButtonComponent } from "../../Types/ButtonComponent";
import listStyler from "./listStyler";

interface Props {
  title: string;
  text: string;
  image?: Image;
  length?: number;
  index?: number | undefined;
  button?: ButtonComponent;
}

export const Card: React.FC<Props> = ({
  title,
  text,
  image,
  length,
  index,
  button,
}) => {
  const hasButton = Boolean(button);
  const isList = length !== undefined && length > 1;
  const listStyles = listStyler(isList, index);

  return (
    <div
      className={`flex flex-wrap justify-center items-center mx-16 py-20 max-[1257px]:py-8 ${listStyles.reverseList}`}
    >
      <ImageRenderer customImage={image} isList={isList} index={index} />
      <div
        className={`flex card-text mx-8 lg:w-[40%] ${listStyles.textAlign.alignOdd.text} ${listStyles.textAlign.alignEven.text}`}
      >
        <h2
          className={`self-center text-3xl my-6 md:mx-20 lg:mx-0 ${listStyles.textAlign.alignOdd.title} ${listStyles.textAlign.alignEven.title}`}
        >
          {title}
        </h2>
        <p className="text-xl leading-loose">{text}</p>
        {hasButton && <Button icon={button?.icon}>{button?.children}</Button>}
      </div>
    </div>
  );
};
