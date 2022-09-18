import React from "react";
import Image, { StaticImageData } from "next/image";
import LinkButton from "../Buttons/LinkButton";
import Tags from "../Tags/Tags";
import Link from "next/link";

export interface CardProps {
  imageLink: string | StaticImageData;
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
    <div className="py-4 w-full">
      <div className="flex flex-col h-full shadow-md border border-gray-200 rounded-md">
        <div>
          <Link href={demoLink ?? ""}>
            <a target="_blank">
              <Image
                src={imageLink}
                alt=""
                width="100%"
                height="60px"
                layout="responsive"
                objectFit="initial"
                className="rounded-t-md cursor-pointer opacity-80 transition-transform duration-500 hover:opacity-100 hover:scale-110"
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-col p-4 space-y-3 mt-4">
          <div className="text-2xl font-bold uppercase">{title}</div>
          <div style={{ minHeight: "55px" }}>
            <Tags tags={tags} />
          </div>
          <div
            className="text-gray-500 line__clamp flex-1"
            style={{
              WebkitLineClamp: 3,
              minHeight: "70px",
            }}
          >
            {content}
          </div>
          <div className="flex space-x-4 flex-1">
            <LinkButton href={demoLink}>Visit Site</LinkButton>
            <LinkButton href={sourceLink}>Source Code</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
