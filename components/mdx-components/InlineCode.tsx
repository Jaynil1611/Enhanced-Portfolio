import React, { ReactNode } from "react";

interface InlineCodeProps {
  children?: ReactNode;
}

const InlineCode = ({ children }: InlineCodeProps) => {
  return (
    <code className="not-prose after:content-none before:content-none">
      {children}
    </code>
  );
};

export default InlineCode;
