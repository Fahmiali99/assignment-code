import React from "react";
import NextHead from "next/head";
import { useRouter } from "next/router";

export const WEBSITE_HOST_URL = "/";

function Header({ title }) {
  const router = useRouter();
  const meta = {
    title: title,
    description:
      "Pengembangan aplikasi website dengan user interface yang user friendly",
    image: `${WEBSITE_HOST_URL}/assets/logo.webp`,
    type: "website",
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Fahmi - Website" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </NextHead>
  );
}

export default Header;
