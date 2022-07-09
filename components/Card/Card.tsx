import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkButton from "../Buttons/LinkButton";
import Tags from "../Tags/Tags";

interface CardProps {}

const imageLink =
  "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

const tags = [
  "NextJs",
  "React",
  "JavaScript",
  "TypeScript",
  "TypeScript",
  "TypeScript",
];

const Card = () => {
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
          <div className="text-2xl font-bold">Title</div>
          <div>
            <Tags tags={tags} />
          </div>
          <div className="text-gray-500">
            A responsive full-stack food order web app built in Next.js, Redux
            and MongoDB. Users can add items to the cart and place orders. The
            order info will be sent to the database.
          </div>
          <div className="flex space-x-4">
            <LinkButton href="https://github.com/Jaynil1611/Enhanced-Portfolio">
              Visit Site
            </LinkButton>
            <LinkButton href="https://github.com/Jaynil1611/Enhanced-Portfolio">
              Source Code
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
