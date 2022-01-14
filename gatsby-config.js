module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "p-one-gatsby",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Prompt`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vir5jihty8kr`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `ahGrnjXksNY55HmJzRx2g1_G3FIHnVc26Q4k_DsvWPE`,
      },
    },
  ],
};
