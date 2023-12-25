import React from "react"
import { AppBar, Toolbar } from "@mui/material"
import { ReactNode } from "react"

interface NavContainerProps {
  children: ReactNode
}

function NavContainer({ children }: NavContainerProps) {
  return (
    <AppBar position="static" sx={{ width: "100%" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
          color: "black",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {children}
      </Toolbar>
    </AppBar>
  )
}

export default NavContainer
