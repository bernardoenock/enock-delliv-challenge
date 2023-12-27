import React from "react"
import { Avatar } from "@mui/material"

function Logo() {
  return (
    <Avatar>
      <img
        style={{
          overflowClipMargin: "content-box",
          width: "100%",
          height: "100%",
        }}
        src="./logo-delliv.png"
        alt="Logo Delliv"
      />
    </Avatar>
  )
}

export default Logo
