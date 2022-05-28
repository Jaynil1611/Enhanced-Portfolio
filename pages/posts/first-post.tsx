import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import Layout from "../../components/Layout";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>This is the title</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(
            "You've successfully loaded third party javascript file."
          );
        }}
      ></Script>
      <div className="flex flex-col">
        <Link href="/">
          <a>first-post</a>
        </Link>
        <Image
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
          alt="background"
          width="500px"
          height="300px"
        />
      </div>
    </Layout>
  );
}

export default FirstPost;
