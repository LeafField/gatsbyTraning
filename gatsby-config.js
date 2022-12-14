/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ESSENTISLS`,
    description: 'おいしい食材と食事を探求するサイト',
    siteUrl: `https://gatsby-traning.vercel.app/`,
    lang: 'ja',
  },
  plugins: [

    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'ESSENTTIALS エッセンシャルズ',
        short_name: 'ESSENTTIALS',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#477294',
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      }
    },
    "gatsby-plugin-image",
  ]
};
