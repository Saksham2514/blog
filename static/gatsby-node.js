const path = require('path')
exports.createPages = async ({ graphql,actions }) =>{
    
    const { data } = await graphql(`
    query MarkdownSlugs {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        slug
      }
    }
  }
}    `)
    data.allMarkdownRemark.nodes.array.forEach(element => {
        actions.createPage({
            path:'/projects/'+element.frontmatter.slug,
            component: path.resolve('./src/templates/project-details.js'),
            context : {slug : element.frontmatter.slug}
        })
    });


}