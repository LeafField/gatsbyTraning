const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogresult = await graphql(`
  query{
    allContentfulBlogPost(sort: {publishDate: DESC}) {
      edges {
        node {
          id
          slug
        }
        next {
          slug
          title
        }
        previous {
          slug
          title
        }
      }
    }
  }
  `)

  if (blogresult.errors) {
    reporter.panicOnbuild('GraphQLのクエリでエラーが発生しました')
    return
  }

  blogresult.data.allContentfulBlogPost.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: `/blog/post/${node.slug}`,
      component: path.resolve('./src/templates/blogpost-template.jsx'),
      context: {
        id: node.id,
        next,
        previous,
      },
    })
  });
}
