import React, { useState } from "react";
import {
  getAllProjects,
  getFilteredProjectsBasedOnTag,
  getTagsFromAllProjects,
  pluralize,
} from "../common/utils";
import { ProjectCard, Layout, SectionHeader, TagLayout } from "../components";

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
              <ProjectCard key={project.title} {...project} />
            ))}
          </ul>
        </div>
        <TagLayout
          data={getTagsFromAllProjects()}
          handleTagClick={handleTagClick}
          selectedTag={selectedTag}
        />
      </div>
    </Layout>
  );
};

export default Projects;
