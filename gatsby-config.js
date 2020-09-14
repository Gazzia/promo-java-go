const siteMetadata = require('./site-metadata.json')
const sass = require('node-sass');
const sassUtils = require('node-sass-utils')(sass);

module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-remark-images`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-prismjs`,
                  options: {
                    aliases:{sh: "bash", js:"javascript"},
                    showLineNumbers: true,
                  }
                },
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    maxWidth: 800,
                  },
                },
                {
                  resolve: "gatsby-remark-external-links",
                  options: {
                    target: "_blank",
                    rel: "nofollow"
                  }
                },
              ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            },
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        }
    ]
};
