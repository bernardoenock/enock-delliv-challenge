import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import { ReactNode } from "react"

interface RouterBtnProps {
  children: ReactNode
  to: string
}

function RouterBtn({ to, children }: RouterBtnProps) {
  return (
    <Button>
      <Link to={to}>{children}</Link>
    </Button>
  )
}

export default RouterBtn
