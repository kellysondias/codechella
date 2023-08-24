import React from "react";
import { Button } from "../Button";
import { ImageRenderer } from "./ImageRenderer";
import type Image from "../../Types/Image";
import type CardButton from "../../Types/CardButton";
import listStyler from "./style/listStyler";
import smallerCardStyle from "./style/smallerStyle";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  text: string;
  image?: Image;
  length?: number;
  index?: number | undefined;
  smaller?: boolean | undefined;
  button?: CardButton;
}

export const Card: React.FC<Props> = ({
  title,
  text,
  image,
  length,
  index,
  smaller,
  button,
}) => {
  const hasButton = Boolean(button);
  const isList = length !== undefined && length > 1;
  const listStyles = listStyler(isList, index);
  const smallerStyle = smallerCardStyle(smaller);

  return (
    <div
      className={`flex-center flex-wrap mx-16 py-20 max-[1257px]:py-8 ${listStyles.reverseList} ${smallerStyle.paddingY} ${smallerStyle.lgMarginLeftLastX} ${smallerStyle.lgMarginRightFirstX} ${smallerStyle.relativeEven} ${smallerStyle.topEven} ${smallerStyle.staticEven}`}
    >
      <ImageRenderer
        customImage={image}
        isList={isList}
        index={index}
        smaller={smaller}
      />
      <div
        className={`flex card-text mx-8 lg:w-[40%] ${smallerStyle.textWidth} ${listStyles.textAlign.alignOdd.text} ${listStyles.textAlign.alignEven.text}`}
      >
        <h2
          className={`self-center text-3xl my-6 md:mx-20 lg:mx-0 ${listStyles.textAlign.alignOdd.title} ${listStyles.textAlign.alignEven.title}`}
        >
          {title}
        </h2>
        <p className="text-xl leading-loose">{text}</p>
        {hasButton && (
          <Link to={`/${button?.to}`}>
            <Button icon={button?.icon}>{button?.children}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
