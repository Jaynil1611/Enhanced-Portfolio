import React from "react";

interface BlogIframe {
  src: string;
  title: string;
  allow: string;
  sandbox: string;
  width?: string;
  height?: string;
}

const BlogIframe = (props: BlogIframe) => {
  return (
    <iframe
      className="border-0 rounded-md overflow-x-hidden"
      width="100%"
      height="500px"
      {...props}
    ></iframe>
  );
};

export default BlogIframe;
