import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const textStyle = { fontSize: 16, lineHeight: "32px" }

const VideosPage = () => {
  return (
    <Layout>
      <SEO title="Video Content" />
      <div style={{ display: "flex", marginBottom: 30 }}>
        <div style={{ flex: 1 }}>
          <h2>
            <a href="https://twitch.tv/RenoInMO">Live Streams</a>
          </h2>
          <p style={{ paddingRight: 50, ...textStyle }}>
            About once a week, I'll live stream work on Tabltop or other side
            projects. If you're interested in seeing how the product is made, be
            sure to follow the channel, and tune in during the streams!
          </p>
        </div>
        <iframe
          src="https://player.twitch.tv/?channel=renoinmo&muted=true&parent=www.renodubois.com"
          frameborder="0"
          scrolling="no"
          allowFullscreen="true"
          title="RenoInMO's Twitch Channel"
        ></iframe>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h2>
            <a href="https://www.youtube.com/channel/UCiuLXAfvW5gbX89_R2cpOyg">
              YouTube
            </a>
          </h2>
          <p style={{ paddingRight: 50, ...textStyle }}>
            I will upload past broadcasts on to YouTube, as well as some other
            videos later down the line. You can{" "}
            <a href="https://www.youtube.com/channel/UCiuLXAfvW5gbX89_R2cpOyg?sub_confirmation=true">
              subscribe
            </a>{" "}
            to the channel to get updates on new videos!
          </p>
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </Layout>
  )
}

export default VideosPage
