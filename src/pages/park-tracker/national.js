import React from "react";
import Layout from "../../components/layout";
import ParkTracker from "../../components/park-tracker";
import SEO from "../../components/seo";
import data from "../../mo_state_parks.json";

const National = () => {
    return (
        <Layout>
            <SEO title="US National Park Tracker" />
            <h1>US National Parks</h1>
            <p>Coming soon!</p>
        </Layout>
    )
}

export default National;