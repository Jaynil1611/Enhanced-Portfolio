import React, { ReactNode } from "react";

const BlogLink = ({ href, children }: Record<string, any>) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default BlogLink;
