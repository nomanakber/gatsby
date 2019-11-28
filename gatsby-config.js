/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
  // pathPrefix: `http://localhost/gatsby-wordpress`,
  //assetPrefix: "/gatsby-wordpress/app/themes/base_theme/framework/public/"
}
