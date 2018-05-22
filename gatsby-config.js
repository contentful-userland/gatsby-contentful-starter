const { existsSync } = require('fs')
if (existsSync('./.env')) { 
  require('dotenv').config()
}

const contentfulDev = {
        "host": "preview.contentful.com",
	"spaceId": process.env.CONTENTFUL_SPACE_ID,
	"accessToken": process.env.CONTENTFUL_PREVIEW_TOKEN
	}
const contentfulProd = {
        "spaceId": process.env.CONTENTFUL_SPACE_ID,
	"accessToken": process.env.CONTENTFUL_DELIVERY_TOKEN
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
