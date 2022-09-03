import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import { CardProps } from "../components/Card/Card";
import { cardsData } from "./data";

export const getFeaturedProjects = () => {
  const featured = cardsData.projects.featured;
  return Object.values(featured);
};

export const getAllProjects = () => {
  const all = cardsData.projects.all;
  return Object.values(all);
};

export const getFilteredProjectsBasedOnTag = (searchTag: string) => {
  const all = Object.values(cardsData.projects.all);
  if (!searchTag) return all;
  return all.filter((value) => {
    const project = value as CardProps;
    return project.tags.some((tag: string) => tag === searchTag);
  });
};

export const getTagsFromAllProjects = () => {
  const all = cardsData.projects.all;
  const result = Object.values(all).reduce((tagsObj, { tags }) => {
    tags.forEach((tag: string) => {
      if (tagsObj[tag]) {
        tagsObj[tag] += 1;
      } else {
        tagsObj[tag] = 1;
      }
    });
    return tagsObj;
  }, {} as Record<string, number>);
  return Object.entries(result);
};

export const pluralize = (count: number, query: string) => {
  return count > 1 ? `${query}s` : query;
};

const blogPostsDirectory = path.join(process.cwd(), "articles");

export const getAllBlogPostIds = () => {
  const blogPosts = fs.readdirSync(blogPostsDirectory);
  return blogPosts.map((blogPost) => {
    return { params: { id: blogPost.replace(/\.mdx$/, "") } };
  });
};

export const getAllBlogPosts = () => {
  const blogPosts = fs.readdirSync(blogPostsDirectory);
  const allBlogPosts = blogPosts.reduce(
    (allBlogPosts: Array<any>, blogPost) => {
      const fullPath = path.join(blogPostsDirectory, blogPost);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return [
        {
          ...data,
          id: blogPost.replace(".mdx", ""),
          readingTime: readingTime(fileContents).text,
        },
        ...allBlogPosts,
      ];
    },
    []
  );
  return allBlogPosts.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) return 1;
    if (a.publishedAt > b.publishedAt) return -1;
    return 0;
  });
};

export const getBlogPostData = (id: string) => {
  const fullPath = path.join(blogPostsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { content, data } = matter(fileContents);

  return {
    content,
    frontmatter: {
      id,
      // excerpt: data.excerpt,
      title: data.title,
      publishedAt: data.publishedAt,
      readingTime: readingTime(fileContents).text,
      ...data,
    },
  };
};
