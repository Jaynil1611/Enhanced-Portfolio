import React from "react";

interface SectionHeaderProps {
  heading: string;
  description?: string;
}

const SectionHeader = ({ heading, description = "" }: SectionHeaderProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{heading}</h1>
      <p className="text-gray-500 mb-6">{description}</p>
    </div>
  );
};

export default SectionHeader;
