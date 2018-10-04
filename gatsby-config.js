module.exports = {
  siteMetadata: {
    title: 'Design+Creative Studio',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      }      
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'hzlnmdorza3h',
        accessToken: 'bee864f6749befabd55c8f80a90c06d98a4102f639162003b12eb1207f67d360'
      }
    },
    'gatsby-plugin-offline',
  ],
}
