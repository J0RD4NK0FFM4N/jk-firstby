/** @jsx jsx */
// import React from "react";
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { css, jsx } from "@emotion/react"

const Page3 = () => {
  const color = "white"
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1
        css={{
          fontFamily: "Fantasy",
        }}
      >
        Hi people
      </h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default Page3
