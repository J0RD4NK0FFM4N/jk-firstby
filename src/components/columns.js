/** @jsx jsx */
// import React from "react";
import { css, jsx } from "@emotion/react"

const Containers = ({ children }) => {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "3fr 7fr",
      }}
    >
      {children}
    </div>
  )
}

export default Containers
