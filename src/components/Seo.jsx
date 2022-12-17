import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ pagetitle, pagedesc, pagepath }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          lang
          title
          siteUrl
        }
      }
    }
  `);

  const title = pagetitle
    ? `${pagetitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title;
  const description = pagedesc || data.site.siteMetadata.description;
  const url = pagepath
    ? `${data.site.siteMetadata.siteUrl}${pagepath}`
    : data.site.siteMetadata.siteUrl;

  return (
    <>
      <html lang={data.site.siteMetadata.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </>
  );
};

export default Seo;
