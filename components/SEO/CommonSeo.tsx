import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface CommonSEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}

const CommonSEO = ({ title, description, canonicalUrl }: CommonSEOProps) => {
  const router = useRouter();

  const ogType = "website";
  const siteURL = typeof window !== "undefined" ? window.location.hostname : "";
  const twitterHandle = "https://twitter.com/Jaynil_Gaglani";
  const ogImage = `${siteURL}/assets/Mind_UI.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${siteURL}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} key={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link
        rel="canonical"
        href={canonicalUrl ? canonicalUrl : `${siteURL}${router.asPath}`}
      />
    </Head>
  );
};

export default CommonSEO;
