import React from "react";

interface SectionHeaderProps {
  heading: string;
  description?: string;
}

const SectionHeader = ({ heading, description = "" }: SectionHeaderProps) => {
  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-bold mb-7">{heading}</h1>
      <p className="text-gray-500 text-lg lg:text-xl mb-10">{description}</p>
    </div>
  );
};

export default SectionHeader;
