import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

import "../styles/blog-post.css"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  console.log(data)
  return (
    <Layout>
      <div className="blog-post-container">
        <SEO title={post.frontmatter.title} />
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <p className="blog-post-date">{post.frontmatter.date}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
