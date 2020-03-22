import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import PostPreview from "../components/post-preview"
import SEO from "../components/seo"

const recentPosts = [
  {
    id: 1,
    title: "Building Tabltop: Intro",
    date: "12 March 2020",
    previewText:
      "Going over my newest project, the tech stack, and how you can stay up to date on the progress.",
  },
]

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ display: "flex", marginBottom: 30 }}>
        <div>
          <Image />
        </div>
        <div>
          <h1>Hi, I'm Reno.</h1>
          <h3>
            I'm a full stack web developer with experience in React and
            TypeScript.
          </h3>
        </div>
      </div>
      <p>
        Currently, I'm building <Link to="/blog">Tabltop</Link>, a board game
        social media app.
        <br />I also <Link to="/videos">stream live coding on Twitch</Link>,
        working on either Tabltop or small projects.
        <br />
        <br />
        <span style={{ fontWeight: "bold", fontSize: 18 }}>
          Interested in learning along with me?
        </span>
        <br />
      </p>
      <div
        style={{
          display: "flex",
          width: "60%",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Link to="/newsletter">
          <button style={{ backgroundColor: "#2ecc71", color: "#ffffff" }}>
            Join My Newsletter
          </button>
        </Link>
        <a href="https://twitter.com/RenoInMO">
          <button style={{ backgroundColor: "#55acee", color: "#ffffff" }}>
            Follow Me On Twitter
          </button>
        </a>
      </div>
      <section style={{ marginTop: 150 }}>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => (
            <PostPreview
              key={post.id}
              date={post.frontmatter.date}
              path={post.frontmatter.path}
              previewText={post.excerpt}
              title={post.frontmatter.title}
            />
          ))}
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = getAllBlogPosts(10)
