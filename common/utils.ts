import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import { BlogPost, TagsProps } from "../components";
import { Project } from "../components";
import { cardsData } from "./data";

export const getFeaturedProjects = () => {
  const featured = cardsData.projects.featured;
  return Object.values(featured);
};

export const getAllProjects = () => {
  const all = cardsData.projects.all;
  return Object.values(all);
};

export const getFilteredEntitiesBasedOnTag = <T extends BlogPost | Project>(
  data: Array<T>,
  searchTag: string
) => {
  if (!searchTag) return data;
  return data.filter((value) => {
    const project = value;
    return project.tags.some((tag: string) => tag === searchTag);
  });
};

export const getFilteredProjectsBasedOnTag = (searchTag: string) => {
  const all = getAllProjects();
  return getFilteredEntitiesBasedOnTag(all, searchTag);
};

export const getTagsFromEntity = (
  tagsObj: Record<string, number>,
  { tags }: TagsProps
) => {
  tags.forEach((tag: string) => {
    if (tagsObj[tag]) {
      tagsObj[tag] += 1;
    } else {
      tagsObj[tag] = 1;
    }
  });
  return tagsObj;
};

export const getTagsFromAllProjects = () => {
  const result = getAllProjects().reduce(
    getTagsFromEntity,
    {} as Record<string, number>
  );
  return Object.entries(result).sort((a, b) => b[0].localeCompare(a[0]));
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
    const firstPublishedAt = new Date(a.publishedAt).getTime();
    const secondPublishedAt = new Date(b.publishedAt).getTime();
    if (firstPublishedAt < secondPublishedAt) return 1;
    if (firstPublishedAt > secondPublishedAt) return -1;
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
      excerpt: data.excerpt,
      title: data.title,
      publishedAt: data.publishedAt,
      readingTime: readingTime(fileContents).text,
      ...data,
    },
  };
};

export const getTagsFromAllBlogs = (allBlogPosts: Array<BlogPost>) => {
  const result = allBlogPosts.reduce(
    getTagsFromEntity,
    {} as Record<string, number>
  );
  return Object.entries(result);
};

export const getFilteredBlogsBasedOnTag = (
  allBlogPosts: Array<BlogPost>,
  searchTag: string
) => getFilteredEntitiesBasedOnTag(allBlogPosts, searchTag);
