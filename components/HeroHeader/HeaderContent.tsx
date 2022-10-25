import React, { ReactNode } from "react";

interface HeaderContentProps {
  contentList: Array<ReactNode>;
}

const HeaderContent = ({ contentList }: HeaderContentProps) => {
  return (
    <div className="flex flex-col flex-wrap">
      {contentList.map((content, id) => (
        <p key={id} className="my-3 text-lg lg:text-2xl">
          {content}
        </p>
      ))}
    </div>
  );
};

export default HeaderContent;
