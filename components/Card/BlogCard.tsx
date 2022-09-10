import React from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { Tags } from "../index";

export interface BlogPost {
  id: string;
  title: string;
  tags: Array<string>;
  excerpt?: string;
  publishedAt: string;
  readingTime: string;
  content?: string;
}

const BlogCard = ({
  title,
  tags,
  excerpt,
  publishedAt,
  readingTime,
  id,
}: BlogPost) => {
  return (
    <Link href={`/blogs/${id}`}>
      <a>
        <article className="flex flex-col gap-4 p-4 w-full shadow-md border border-gray-200 rounded-md">
          <p className="flex items-center gap-1">
            <i className="bx bxs-calendar mt-0.5"></i>
            <span>{dayjs(publishedAt).format("MMMM D, YYYY")}</span>
            <i className="ml-3 bx bxs-time-five mt-0.5"></i>
            <span>{readingTime}</span>
          </p>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p
            className="line__clamp"
            style={{
              WebkitLineClamp: 3,
            }}
          >
            {excerpt}
          </p>
          <Tags tags={tags} />
        </article>
      </a>
    </Link>
  );
};

export default BlogCard;
