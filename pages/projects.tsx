import React, { MouseEvent, useState } from "react";
import {
  getAllProjects,
  getFilteredProjectsBasedOnTag,
  getTagsFromAllProjects,
} from "../common/utils";
import { Card, Layout } from "../components";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(() =>
    getAllProjects()
  );

  const handleTagClick = (tagName: string) => {
    const filteredProjectsBasedOnTag = getFilteredProjectsBasedOnTag(tagName);
    setFilteredProjects(filteredProjectsBasedOnTag);
  };

  return (
    <Layout>
      <div className="flex flex-col justify-between lg:flex-row">
        <ul className="flex flex-1 flex-wrap">
          {filteredProjects.map((project) => (
            <Card key={project.title} {...project} />
          ))}
        </ul>
        <div className="sticky top-0 self-start p-4 lg:max-w-12 lg:px-0">
          <h4>Tags</h4>
          <ul className="flex flex-wrap mt-2">
            {getTagsFromAllProjects().map(([tagName, tagCount]) => (
              <li
                key={tagName}
                className="m-1 text-sm px-3 py-1 border border-gray-500 rounded-full"
                onClick={() => handleTagClick(tagName)}
              >
                {tagName}, {tagCount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
