import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      className="HeaderContainer"
      style={{
        margin: `0 auto`,
        maxWidth: `42em`,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        home
      </Link>
      <Link
        to="/blog"
        style={{
          textDecoration: `none`,
        }}
      >
        blog
      </Link>
      <Link
        to="/videos"
        style={{
          textDecoration: `none`,
        }}
      >
        videos
      </Link>
      <Link
        to="/newsletter"
        style={{
          textDecoration: `none`,
        }}
      >
        newsletter
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
