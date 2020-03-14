import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsletterForm from "../components/newsletter_form"

const NewsletterPage = () => {
  return (
    <Layout>
      <SEO title="Newsletter" />
      <h1>Stay in the loop.</h1>
      <p>
        Input your email below to get a few emails a month about building
        products, learning new things in the software world, and other
        interesting things I stumble upon.
      </p>
      <NewsletterForm />
    </Layout>
  )
}

export default NewsletterPage
