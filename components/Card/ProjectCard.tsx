import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import LinkButton from "../Buttons/LinkButton";
import Tags from "../Tags/Tags";
import Link from "next/link";

export interface Project {
  imageLink: string | StaticImageData;
  title: string;
  content: ReactNode;
  tags: Array<string>;
  sourceLink?: string;
  demoLink?: string;
}

const ProjectCard = ({
  imageLink,
  title,
  content,
  tags,
  demoLink,
  sourceLink,
}: Project) => {
  return (
    <div className="pb-2 w-full flex flex-col h-full shadow-md border border-gray-200 rounded-md">
      <div>
        <Link href={demoLink ?? ""}>
          <a target="_blank">
            <Image
              src={imageLink}
              alt=""
              loading="eager"
              width="100%"
              height="60px"
              layout="responsive"
              objectFit="initial"
              className="rounded-t-md cursor-pointer opacity-80 transition-transform duration-500 hover:opacity-100 hover:scale-110"
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-col p-4 flex-1">
        <div
          style={{
            WebkitLineClamp: 2,
          }}
          className="text-2xl font-bold uppercase flex-1 flex-wrap line__clamp--project-title"
        >
          {title}
        </div>
        <div className="flex-1 pt-2 line__clamp--project-tags">
          <Tags tags={tags} />
        </div>
        <div
          className="text-gray-500 pt-3 line__clamp line__clamp--project-content"
          style={{
            WebkitLineClamp: 3,
          }}
        >
          {content}
        </div>
        <div className="flex space-x-4 pt-2">
          <LinkButton href={demoLink}>Visit Site</LinkButton>
          <LinkButton href={sourceLink}>Source Code</LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
