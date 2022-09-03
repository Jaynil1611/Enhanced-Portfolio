import dayjs from "dayjs";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { getAllBlogPostIds, getBlogPostData } from "../../common/utils";
import { Layout } from "../../components";

export async function getStaticPaths() {
  const paths = await getAllBlogPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { content, frontmatter } = await getBlogPostData(params.id);
  const mdxSource = await serialize(content);
  return {
    props: { blogPostData: { source: mdxSource, frontmatter } },
  };
}

const Blog = ({ blogPostData: { source, frontmatter } }) => {
  return (
    <Layout>
      <Head>
        <title>{frontmatter.title} | My blog</title>
      </Head>
      <div className="article-container">
        <h1 className="article-title">{frontmatter.title}</h1>
        <p className="publish-date">
          {dayjs(frontmatter.publishedAt).format("MMMM D, YYYY")} &mdash;{" "}
          {frontmatter.readingTime}
        </p>
        <div className="content">
          <MDXRemote {...source} components={{ Image }} />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
