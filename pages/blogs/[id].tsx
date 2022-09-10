import React, { useEffect } from "react";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import dayjs from "dayjs";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { getAllBlogPostIds, getBlogPostData } from "../../common/utils";
import { Layout } from "../../components";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import rehypeCodeTitles from "rehype-code-titles";
import { CodeBlock } from "../../components/mdx-components";

hljs.registerLanguage("javascript", javascript);

export async function getStaticPaths() {
  const paths = await getAllBlogPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { content, frontmatter } = await getBlogPostData(params.id);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: { blogPostData: { source: mdxSource, frontmatter } },
  };
}

const Blog = ({ blogPostData: { source, frontmatter } }) => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title} | My blog</title>
      </Head>
      <div className="md:mb-24">
        <p className="flex items-center gap-1">
          <i className="bx bxs-calendar mt-0.5"></i>
          <span>{dayjs(frontmatter.publishedAt).format("MMMM D, YYYY")}</span>
          <i className="ml-3 bx bxs-time-five mt-0.5"></i>
          <span>{frontmatter.readingTime}</span>
        </p>
        <h1 className="text-3xl font-bold mb-8">{frontmatter.title}</h1>
        <div className="content">
          <MDXRemote {...source} components={{ Image, CodeBlock }} />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
