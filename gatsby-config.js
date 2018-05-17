const contentfulDev = {
        "host": "preview.contentful.com",
	"spaceId": process.env.CFSPACEID,
	"accessToken": process.env.CPATOKEN
	}
const contentfulProd = {
        "spaceId": process.env.CFSPACEID,
	"accessToken": process.env.CDATOKEN
	}

module.exports = {
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: process.env.NODE_ENV === 'development' ?
        contentfulDev :
        contentfulProd
    },
  ],
}
