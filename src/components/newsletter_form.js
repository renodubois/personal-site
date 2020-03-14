import React from "react"
import "./newsletter.css"

const NewsletterForm = () => {
  return (
    <form>
      <input
        type="email"
        name="email"
        required
        placeholder="Enter email address"
        className="newsletterFormItem emailInput"
      />
      <button className="newsletterFormItem submitButton">Subscribe</button>
    </form>
  )
}

export default NewsletterForm
