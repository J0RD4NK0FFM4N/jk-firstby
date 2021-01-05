import React from "react"

export default function(props){
  return(
    <div style={{
      backgroundColor: "rgba(169,192,214,.5)"

    }}>
      <div style={{
        margin: "auto",
        width:"80%",
        marginTop: "50px",
        fontFamily: "sans-serif",
      }}>

      {props.children}
      </div>
    </div>
  )
}
