import React from "react"
import "./mdx-layout.css"

export default function (props) {
  return (
    <div style={{}}>
      <div
        style={{
          margin: "auto",
          width: "80%",
          marginTop: "50px",
          fontFamily: "sans-serif",
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
