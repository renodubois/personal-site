import React, { useState } from "react"
import ParkListItem from "./park-list-item"

const ParkTracker = ({ data, title }) => {
  const [visitedFilter, setVisitedFilter] = useState("all")
  let filteredData = data
  const numberVisited = data.filter(park => park.visited).length
  if (visitedFilter !== "all") {
    filteredData = data.filter(park => {
      if (visitedFilter === "visited") {
        return park.visited
      }
      return !park.visited
    })
  }

  return (
    <>
      <h1>{title}</h1>
      <div style={{ marginBottom: 20, marginTop: -15, color: "#777" }}>
        {numberVisited}/{data.length} visited
      </div>
      <div style={{ paddingBottom: 20 }}>
        <input
          type="radio"
          id="all"
          value="all"
          name="visitedFilter"
          onChange={() => setVisitedFilter("all")}
          defaultChecked
        />
        <label style={{ padding: 20 }} htmlFor="all">
          Show All
        </label>
        <input
          type="radio"
          id="visited"
          value="visited"
          name="visitedFilter"
          onChange={() => setVisitedFilter("visited")}
        />
        <label style={{ padding: 20 }} htmlFor="visited">
          Visited
        </label>
        <input
          type="radio"
          id="notVisited"
          value="notVisited"
          name="visitedFilter"
          onChange={() => setVisitedFilter("notVisited")}
        />
        <label style={{ padding: 20 }} htmlFor="notVisited">
          Not Visited
        </label>
      </div>
      {filteredData.map((park, index) => (
        <ParkListItem key={index} {...park} />
      ))}
    </>
  )
}

export default ParkTracker
