import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ParkTrackerPage = () => {
    return (
        <Layout>
            <SEO title="Park Visit Trackers" />
            <h1>Park Visit Trackers</h1>
            <Link to="/park-tracker/missouri">Missouri State Parks</Link><br /><br />
            <Link to="/park-tracker/national">US National Parks</Link><br />
        </Layout>
    )
}

export default ParkTrackerPage;