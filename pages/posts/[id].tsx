import React from "react";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  // Return array of paths which have params as key in each path to getStaticProps
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// Unsure how params for only one object which has that id is passed
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: { postData },
  };
}

function Post(props) {
  const { postData } = props;
  const { id, title, date, contentHtml } = postData;
  return (
    <Layout>
      {title}
      <br />
      {id}
      <br />
      {date}
      {contentHtml && <div>{contentHtml}</div>}
    </Layout>
  );
}

export default Post;
