import Link from "next/link";
import React from "react";
import { Tags } from "../index";

interface BlogCards {
  title: string;
  tags: Array<string>;
  readingTime: string;
  publishedAt: string;
  content?: string;
  id: string;
}

const BlogCard = ({
  title,
  tags,
  // content,
  publishedAt,
  readingTime,
  id,
}: BlogCards) => {
  console.log({ tags });
  return (
    <Link href={`/blogs/${id}`}>
      <a>
        <article className="flex flex-col gap-4 p-4 w-full shadow-md border border-gray-200 rounded-md">
          <p className="flex items-center gap-1">
            <i className="bx bxs-calendar"></i>
            <span>{publishedAt}</span>
            <i className="ml-3 bx bxs-time-five"></i>
            <span>{readingTime} read</span>
          </p>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p
            className="line__clamp"
            style={{
              WebkitLineClamp: 3,
            }}
          >
            {"Content"}
          </p>
          <Tags tags={tags} />
        </article>
      </a>
    </Link>
  );
};

export default BlogCard;
