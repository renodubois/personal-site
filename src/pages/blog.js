import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/post-preview"

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "Building Tabltop: Intro",
      date: "12 March 2020",
      previewText:
        "Going over my newest project, the tech stack, and how you can stay up to date on the progress.",
    },
  ]
  return (
    <Layout>
      <SEO title="Blog" />
      <h1 style={{ marginBottom: 50 }}>Blog Posts</h1>
      {posts.map(post => (
        <PostPreview key={post.id} {...post} />
      ))}
    </Layout>
  )
}

export default BlogPage
