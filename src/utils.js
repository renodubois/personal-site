export const filterBlogPosts = posts => {
  return posts.filter(
    ({ node: post }) =>
      !("draft" in post.frontmatter) || !post.frontmatter.draft
  )
}
