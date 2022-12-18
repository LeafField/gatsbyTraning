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
    allContentfulCategory {
      edges {
        node {
          id
          categorySlug
          category
          blogpost {
            title
          }
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

  // ブログ一覧ページ
  const blogPostsPerPage = 6
  const blogPosts = blogresult.data.allContentfulBlogPost.edges.length
  const blogPages = Math.ceil(blogPosts / blogPostsPerPage)

  Array.from({ length: blogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: path.resolve('./src/templates/blog-template.jsx'),
      context: {
        skip: blogPostsPerPage * i,
        limit: blogPostsPerPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === blogPages
      }
    })
  })

  blogresult.data.allContentfulCategory.edges.forEach(({ node }) => {
    const catPostsPerPage = 6
    const catPosts = node.blogpost.length
    const catPages = Math.ceil(catPosts / catPostsPerPage)

    Array.from({ length: catPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/cat/${node.categorySlug}` : `/cat/${node.categorySlug}/${i + 1}`,
        component: path.resolve('./src/templates/cat-template.jsx'),
        context: {
          catid: node.id,
          catname: node.category,
          catslug: node.categorySlug,
          skip: catPostsPerPage * i,
          limit: catPostsPerPage,
          currentPage: i + 1,
          isFirst: i + 1 === 1,
          isLast: i + 1 === catPages
        }
      })
    })
  })
}
