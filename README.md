# gatsby-contentful-starter

Gatsby [Contentful](https://www.contentful.com) starter for creating a blog

![The index page of the starter blog](https://rawgit.com/contentful-userland/gatsby-contentful-starter/master/screenshot.jpg "The index page of the starter blog")

Static sites are scalable, secure and have very little required maintainance. They come with a drawbag though. Not everybody feels good editing files, build a project and upload it somewhere. This is where Contentful comes into play.

With Contentful and Gatsby you can connect your favorite static site generator with an API that provides an easy to use interface for people writing content.

## Requirements

To use this project you have to have a Contentful account. If you don't have on yet you can register at [www.contentful.com/sign-up](https://www.contentful.com/sign-up/).

## Getting started

### Get the source code and install dependencies.

```
$ git clone git@github.com:contentful-userland/gatsby-contentful-starter.git
$ npm i
```

Or use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

```
$ gatsby new contentful-starter https://github.com/contentful-userland/gatsby-contentful-starter
```

### Set up of the needed content model and configuration

This project comes with a Contentful setup command `npm run setup`.

This command will ask you for a space ID, and access tokens for the Contentful Management, Preview and Delivery API and then import the needed content model into the space you define and write a config file (`./contentful.json`).

## Crucial Commands

This projects comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `npm run dev`

Run in the project locally using the [Contentful Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/). This can perfect to preview changes before they go into production.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run publish`

Run a production build into `./public` and publish the site to github pages.

## Roadmap

- [ ] make the starter completely responsive
- [ ] include tags
- [ ] support [traced placeholders](https://github.com/gatsbyjs/gatsby/issues/2435)
