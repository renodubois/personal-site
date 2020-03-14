import React from "react"
import { Link } from "gatsby"

const PostPreview = ({ id, date, title, previewText }) => {
  return (
    <article>
      <h2>
        <Link to={`/blog/${id}`}>{title}</Link>
        <span style={{ margin: 10 }}>&bull;</span>
        <span
          style={{
            fontVariant: "small-caps",
            fontSize: 20,
            color: "#444444",
          }}
        >
          {date}
        </span>
      </h2>

      <p style={{ fontStyle: "italic", fontSize: 20 }}>{previewText}</p>
    </article>
  )
}

export default PostPreview
