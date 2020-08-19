import React from "react";
import Layout from "../../components/layout";
import ParkTracker from "../../components/park-tracker";
import SEO from "../../components/seo";
import data from "../../mo_state_parks.json";

const Missouri = () => {
    return (
        <Layout>
            <SEO title="Missouri State Park Tracker" />
            <ParkTracker data={data} title="Missouri State Parks" />
        </Layout>
    )
}

export default Missouri;