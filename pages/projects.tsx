import React, { useState } from "react";
import {
  getAllProjects,
  getFilteredProjectsBasedOnTag,
  getTagsFromAllProjects,
  pluralize,
} from "../common/utils";
import { Button, Card, Layout, SectionHeader } from "../components";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(() =>
    getAllProjects()
  );

  const handleTagClick = (tagName: string) => {
    const tag = selectedTag === tagName ? "" : tagName;
    setSelectedTag(tag);
    const filteredProjectsBasedOnTag = getFilteredProjectsBasedOnTag(tag);
    setFilteredProjects(filteredProjectsBasedOnTag);
  };

  const filteredLength = filteredProjects.length;
  const projectText = pluralize(filteredLength, "project");
  const headingText = `${filteredLength} ${projectText} tagged with ${selectedTag}`;

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row mb-24">
        <div className="flex flex-col">
          {selectedTag && <SectionHeader heading={headingText} />}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 lg:min-w-[42rem] mr-4">
            {filteredProjects.map((project) => (
              <Card key={project.title} {...project} />
            ))}
          </ul>
        </div>
        <div className="sticky top-0 self-start p-4 w-full lg:px-0">
          <h4>Tags</h4>
          <ul className="flex flex-wrap mt-2">
            {getTagsFromAllProjects().map(([tagName, tagCount]) => {
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
      </div>
    </Layout>
  );
};

export default Projects;
