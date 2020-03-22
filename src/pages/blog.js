import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"
import { filterBlogPosts } from "../utils"

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const filteredPosts = filterBlogPosts(posts)
  return (
    <Layout>
      <SEO title="Blog" />
      <h1 style={{ marginBottom: 50 }}>Blog Posts</h1>
      {filteredPosts.length > 0 ? (
        filteredPosts.map(({ node: post }) => {
          return (
            <PostPreview
              date={post.frontmatter.date}
              previewText={post.excerpt}
              path={post.frontmatter.path}
              title={post.frontmatter.title}
              key={post.id}
            />
          )
        })
      ) : (
        <p style={{ fontSize: 20, fontWeight: "bold" }}>
          No posts... yet. Check back soon!
        </p>
      )}
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
