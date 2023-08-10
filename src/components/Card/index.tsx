import React from "react";
import { Button } from "../Button";
import { ImageRenderer } from "./ImageRenderer";
import type { Image } from "../../Types/Image";
import type { ButtonComponent } from "../../Types/ButtonComponent";

interface Props {
  length?: number;
  index?: number | undefined;
  image?: Image;
  title: string;
  text: string;
  button?: ButtonComponent;
}

export const Card: React.FC<Props> = ({
  length,
  index,
  image,
  title,
  text,
  button,
}) => {
  const hasButton = Boolean(button);

  const isList = length !== undefined && length > 1;

  const isOdd = index !== undefined && index % 2 !== 0;

  const reverser = (trueStyle: string, falseStyle: string) =>
    isList ? trueStyle : falseStyle;

  const styleOdd = (trueStyle: string, falseStyle: string) =>
    isOdd ? trueStyle : falseStyle;

  const listStyles = {
    reverseList: reverser("lg:odd:flex-row-reverse", ""),
    textAlign: {
      alignEven: {
        title: reverser("xl:self-start", ""),
        text: reverser("xl:text-left", ""),
      },
      alignOdd: {
        title: styleOdd("xl:self-end", ""),
        text: styleOdd("xl:text-right", ""),
      },
    },
  };

  return (
    <div
      className={`flex flex-wrap justify-center items-center mx-16 py-20 max-[1257px]:py-8 ${listStyles.reverseList}`}
    >
      <ImageRenderer isList={isList} customImage={image} index={index} />
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
