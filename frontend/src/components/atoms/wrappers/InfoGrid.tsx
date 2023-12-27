import React from "react"
import { Grid } from "@mui/material"
import { ReactNode } from "react"

interface InfoContainerProps {
  children: ReactNode
}

function InfoContainer({ children }: InfoContainerProps) {
  return <Grid>{children}</Grid>
}

export default InfoContainer
