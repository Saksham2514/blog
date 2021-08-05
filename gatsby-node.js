const path = require ('path')
exports.createPages = async ({ graphql , actions}) => {
    const { data } = await graphql(`
    query GeneratePageRoute {
    allMarkdownRemark(sort: {fields: frontmatter___date}) {
    nodes {
      frontmatter {
        slug
      }
    }
  }
} `)
const nodes = data.allMarkdownRemark.nodes   
console.log(nodes);
    nodes.forEach(node =>{
        actions.createPage({
            path : '/projects/'+node.frontmatter.slug,
            component: path.resolve('./src/templates/project-details.js'),
            context : {slug : node.frontmatter.slug}
        })
    })
}