import React from "react";
import { Button } from "../Button";
import { ImageRenderer } from "./ImageRenderer";
import type { Image } from "../../Types/Image";
import type { ButtonComponent } from "../../Types/ButtonComponent";

interface Props {
  length?: number;
  isFirstCard?: boolean;
  image?: Image;
  title: string;
  text: string;
  button?: ButtonComponent;
}

export const Card: React.FC<Props> = ({
  length,
  image,
  title,
  text,
  button,
  isFirstCard,
}) => {
  const hasButton = Boolean(button);

  const isList = length !== undefined && length > 1;

  const reverter = (trueStyle: string, falseStyle?: string) =>
    isList ? trueStyle : falseStyle;

  const listStyles = {
    reverseList: reverter("lg:odd:flex-row-reverse"),
    reversePadding: reverter("lg:mx-0 lg:mr-10", "lg:mx-10"),
  };

  return (
    <div
      className={`flex flex-wrap justify-center items-center mx-16 py-20 max-[1257px]:py-8 ${listStyles.reverseList}`}
    >
      <ImageRenderer
        isList={isList}
        customImage={image}
        isFirstImage={isFirstCard}
      />
      <div className={`card-text lg:w-[40%] ${listStyles.reversePadding}`}>
        <h2 className="text-3xl my-6 md:mx-20 lg:mx-0">{title}</h2>
        <p className="text-xl leading-loose">{text}</p>
        {hasButton && <Button icon={button?.icon}>{button?.children}</Button>}
      </div>
    </div>
  );
};
