import React from "react"
import "../styles/blog-post.css"


export default function ParkListItem({ name, parkURL, visited, firstVisit }) {
  return (
    <div
      style={{
        padding: "20px 0 20px 0",
        borderTop: "1px solid #ddd",
        display: "flex",
      }}
    >
      <div
        style={{
          backgroundColor: visited ? "green" : "red",
          width: 25,
          height: 25,
          padding: 10,
          borderRadius: 100,
        }}
      ></div>
      <a style={{ alignSelf: "center", paddingLeft: 20 }} href={parkURL}>
        {name}
      </a>
      {firstVisit && (
        <span style={{ paddingLeft: 90, fontSize: 14, color: "#777" }}>
          First visited on: {firstVisit}
        </span>
      )}
    </div>
  )
}
