import React from "react";

export interface TagsProps {
  tags: Array<string>;
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <ul
      className="flex flex-wrap items-center"
    >
      {tags?.slice(0, 6).map((tag: string) => {
        return (
          <li
            key={tag}
            className="px-2.5 py-0.5 my-0.5 mr-2 border rounded-full border-gray-300 text-xs font-semibold leading-5"
          >
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
