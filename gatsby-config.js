/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ElPadrino.ng`,
    siteUrl: `https://www.yourdomain.tld`,
    author: '@Ampney',
    description: 'We are not mexica, we creating a fusion we call; Naija-Mex.',
    copyright: 'This website is copyright 2023. ElPadrino👌'
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-transformer-remark',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    {
      resolve: 'gatsby-background-image',
      options: {
        specialChars: '/:',
      }
    },
]
};