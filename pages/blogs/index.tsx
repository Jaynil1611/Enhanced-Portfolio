import React, { useState } from "react";
import {
  getAllBlogPosts,
  getFilteredBlogsBasedOnTag,
  getTagsFromAllBlogs,
  pluralize,
} from "../../common/utils";
import { BlogCard, Layout, SectionHeader, TagLayout } from "../../components";
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

  const filteredBlogsBasedOnTag = getFilteredBlogsBasedOnTag(
    allBlogPosts,
    selectedTag
  );

  const handleTagClick = (tagName: string) => {
    const tag = selectedTag === tagName ? "" : tagName;
    setSelectedTag(tag);
  };

  const filteredLength = filteredBlogsBasedOnTag.length;
  const blogText = pluralize(filteredLength, "blog");
  const headingText = `${filteredLength} ${blogText} tagged with ${selectedTag}`;

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row mb-24">
        <div className="flex flex-col">
          {selectedTag && <SectionHeader heading={headingText} />}
          <ul className="flex flex-col gap-16 lg:min-w-[42rem] mr-4">
            {filteredBlogsBasedOnTag.map((blogPost) => (
              <BlogCard key={blogPost.title} {...blogPost} />
            ))}
          </ul>
        </div>
        <TagLayout
          data={getTagsFromAllBlogs(allBlogPosts)}
          handleTagClick={handleTagClick}
          selectedTag={selectedTag}
        />
      </div>
    </Layout>
  );
};

export default Blogs;
