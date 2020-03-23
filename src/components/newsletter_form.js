import React, { useState } from "react"
import "./newsletter.css"

const NewsletterForm = () => {
  const [formResponse, setFormResponse] = useState({
    success: false,
    message: "",
  })
  return (
    <form
      onSubmit={async event => {
        event.preventDefault()
        const response = await fetch(
          "https://api.renodubois.com/newsletter/signup",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              email: event.target.elements["email"].value,
            }),
          }
        )
        const body = await response.json()
        if (body.success) {
          setFormResponse({
            success: true,
            message: "You have been subscribed to the newsletter!",
          })
        } else {
          console.error(body.error)
          setFormResponse({
            success: false,
            message: "Oops, something went wrong! Please try again.",
          })
        }
      }}
    >
      {formResponse.message ? (
        <div
          style={{
            backgroundColor: formResponse.success ? "green" : "red",
            padding: 15,
            borderRadius: 5,
            marginBottom: 15,
            color: "white",
            fontWeight: "bold",
          }}
        >
          {formResponse.message}
          <button
            style={{ float: "right", padding: 0, color: "white" }}
            onClick={() => setFormResponse({ ...formResponse, message: "" })}
          >
            x
          </button>
        </div>
      ) : null}
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
