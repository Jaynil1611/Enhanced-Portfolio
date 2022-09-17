import React from "react";

interface TagLayoutProps {
  data: Array<[string, number]>;
  handleTagClick: (val: string) => void;
  selectedTag: string;
}

const TagLayout = ({ data, handleTagClick, selectedTag }: TagLayoutProps) => {
  return (
    <div className="sticky top-0 self-start py-4 w-full lg:px-0">
      <h4>Tags</h4>
      <ul className="flex flex-wrap mt-2">
        {data.map(([tagName, tagCount]) => {
          const isSelected = selectedTag === tagName;
          return (
            <li
              key={tagName}
              className={`m-1 text-sm px-3 py-1 border border-gray-500 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white ${
                isSelected ? "bg-blue-600 text-white" : ""
              }`}
              onClick={() => handleTagClick(tagName)}
            >
              {tagName}, {tagCount}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TagLayout;
