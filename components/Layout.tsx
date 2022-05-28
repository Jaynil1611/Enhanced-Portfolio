import Head from "next/head";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content="Layout" />
      </Head>
      <div className="max-w-3xl p-4 m-auto">{children}</div>
    </>
  );
};

export default Layout;
