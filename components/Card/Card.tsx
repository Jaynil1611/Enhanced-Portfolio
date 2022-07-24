import React from "react";
import Image from "next/image";
import LinkButton from "../Buttons/LinkButton";
import Tags from "../Tags/Tags";

export interface CardProps {
  imageLink: string;
  title: string;
  content: string;
  tags: Array<string>;
  sourceLink?: string;
  demoLink?: string;
}

const Card = ({
  imageLink,
  title,
  content,
  tags,
  demoLink,
  sourceLink,
}: CardProps) => {
  return (
    <div className="p-4 md:w-1/2">
      <div className="flex flex-col shadow-md border border-gray-200 rounded-md">
        <div>
          <Image
            src={imageLink}
            alt=""
            width="100%"
            height="60px"
            layout="responsive"
            objectFit="cover"
            className="rounded-t-md"
          />
        </div>
        <div className="flex flex-col p-4 space-y-4 my-4">
          <div className="text-2xl font-bold">{title}</div>
          <div>
            <Tags tags={tags} />
          </div>
          <div className="text-gray-500">{content}</div>
          <div className="flex space-x-4">
            <LinkButton href={demoLink}>Visit Site</LinkButton>
            <LinkButton href={sourceLink}>Source Code</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
