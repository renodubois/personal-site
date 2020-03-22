import graphql from "gatsby"

export const filterBlogPosts = posts => {
  return posts.filter(
    ({ node: post }) =>
      !("draft" in post.frontmatter) || !post.frontmatter.draft
  )
}

export const getAllBlogPosts = (limit = 50) => {
  graphql`
    query BlogQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: ${limit}
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              path
              draft
            }
          }
        }
      }
    }
  `
}
