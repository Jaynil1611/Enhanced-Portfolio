import React, { useEffect } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import dayjs from "dayjs";
import { serialize } from "next-mdx-remote/serialize";
import { getAllBlogPostIds, getBlogPostData } from "../../common/utils";
import { BlogPost, Layout } from "../../components";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeImgSize from "rehype-img-size";
import {
  BlogIframe,
  BlogImage,
  BlogLink,
  CodeBlock,
  InlineCode,
} from "../../components/mdx-components";

hljs.registerLanguage("javascript", javascript);

interface GetStaticProps {
  params: Record<string, string>;
}

interface BlogProps {
  blogPostData: {
    source: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, string>
    >;
    frontmatter: BlogPost;
  };
}

export async function getStaticPaths() {
  const paths = await getAllBlogPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
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
        //@ts-ignore
        [rehypeImgSize, { dir: "public" }],
      ],
    },
  });

  return {
    props: { blogPostData: { source: mdxSource, frontmatter } },
  };
}

const components = {
  img: BlogImage,
  CodeBlock,
  code: InlineCode,
  BlogIframe,
  a: BlogLink,
};

const Blog = ({ blogPostData: { source, frontmatter } }: BlogProps) => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title} | My blog</title>
      </Head>
      <div className="flex flex-col md:mb-24">
        <p className="flex items-center gap-1">
          <i className="bx bxs-calendar mt-0.5"></i>
          <span>{dayjs(frontmatter.publishedAt).format("MMMM D, YYYY")}</span>
          <i className="ml-3 bx bxs-time-five mt-0.5"></i>
          <span>{frontmatter.readingTime}</span>
        </p>
        <h1 className="text-4xl font-bold mb-8 mt-3">{frontmatter.title}</h1>
        <div className="prose max-w-none lg:prose-xl">
          <MDXRemote {...source} components={components} />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
