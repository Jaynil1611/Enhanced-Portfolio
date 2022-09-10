import React, { useState } from "react";
import {
  getAllBlogPosts,
  getFilteredBlogsBasedOnTag,
  getTagsFromAllBlogs,
  pluralize,
} from "../../common/utils";
import { BlogCard, Layout, SectionHeader } from "../../components";
import { BlogPost } from "../../components";

export async function getStaticProps() {
  const allBlogPosts = await getAllBlogPosts();
  return { props: { allBlogPosts } };
}

interface BlogsProps {
  allBlogPosts: Array<BlogPost>;
}

const Blogs = ({ allBlogPosts }: BlogsProps) => {
  const [selectedTag, setSelectedTag] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogPosts);

  const handleTagClick = (tagName: string) => {
    const tag = selectedTag === tagName ? "" : tagName;
    setSelectedTag(tag);
    const filteredBlogsBasedOnTag = getFilteredBlogsBasedOnTag(
      allBlogPosts,
      tag
    );
    setFilteredBlogs(filteredBlogsBasedOnTag);
  };

  const filteredLength = filteredBlogs.length;
  const blogText = pluralize(filteredLength, "blog");
  const headingText = `${filteredLength} ${blogText} tagged with ${selectedTag}`;

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
            {getTagsFromAllBlogs(allBlogPosts).map(([tagName, tagCount]) => {
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
