const path = require("path")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  
  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"
    createPage(page)
  }
}

exports.createPages = async({ graphql, actions }) => {
  const { data } = await graphql(`
    query gallery {
      allMdx {
        nodes {
          slug
        }
      }
    }  
  `)

  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      path: node.slug,
      component: path.resolve('./src/templates/gallery_template.js'),
      context: {slug: node.slug}
    })
  })
}
