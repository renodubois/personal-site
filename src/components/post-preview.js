import React from "react"
import { Link } from "gatsby"

const PostPreview = ({ path, date, title, previewText }) => {
  return (
    <article>
      <h3>
        <Link to={`${path}`}>{title}</Link>
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
      </h3>

      <p style={{ fontStyle: "italic", fontSize: 20 }}>{previewText}</p>
    </article>
  )
}

export default PostPreview
