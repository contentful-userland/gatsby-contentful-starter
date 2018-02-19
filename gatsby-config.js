module.exports = {
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `cmls7salv7po`,
        accessToken: `2da5f408b0933f849521c3650cc4e124415fb59d7cd59ea111b09c677af757c0`,
      },
    },
  ],
}
