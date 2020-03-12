import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Reno</h1>
    <p>
      I'm a full stack web developer with experience in React and TypeScript.
      Currently, I'm building <Link to="/blog">Tabltop</Link>, a board game
      social network. I also{" "}
      <Link to="/videos">stream live coding on Twitch</Link>, working on either
      Tabltop or small projects. Want to stay updated on what I'm working on?{" "}
      <Link to="/newsletter">Subscribe</Link> to my newsletter and follow me on{" "}
      <a href="https://twitter.com/RenoInMO">Twitter</a>.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
