import React, { ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  return <div className="my-4 not-prose">{children}</div>;
};

export default CodeBlock;
