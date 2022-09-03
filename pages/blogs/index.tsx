import React, { useState } from "react";
import {
  getAllBlogPosts,
  getAllProjects,
  getFilteredProjectsBasedOnTag,
  getTagsFromAllProjects,
  pluralize,
} from "../../common/utils";
import { BlogCard, Card, Layout, SectionHeader } from "../../components";

export async function getStaticProps() {
  const allBlogPosts = await getAllBlogPosts();
  return { props: { allBlogPosts } };
}

const Blogs = ({ allBlogPosts }) => {
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
          <ul className="flex flex-col gap-16 lg:min-w-[42rem] mr-4">
            {allBlogPosts.map((blogPost) => (
              <BlogCard key={blogPost.title} {...blogPost} />
            ))}
          </ul>
        </div>
        <div className="sticky top-0 self-start py-4 w-full lg:px-0">
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

export default Blogs;
