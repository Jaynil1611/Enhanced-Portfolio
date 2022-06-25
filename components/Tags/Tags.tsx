import React from "react";

const Tags = ({ tags }) => {
  return (
    <ul className="flex flex-wrap items-center">
      {tags.map((tag: string) => {
        return (
          <li
            key={tag}
            className="px-1.5 mr-2 mb-1 border-2 rounded-md border-gray-900 text-xs font-semibold leading-5"
          >
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
