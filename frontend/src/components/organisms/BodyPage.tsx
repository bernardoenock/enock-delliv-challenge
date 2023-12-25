import React from "react"
import { Container } from "@mui/material"
import { ReactNode } from "react"

interface BodyPageProps {
  children: ReactNode
}

function BodyPage({ children }: BodyPageProps) {
  return <Container>{children}</Container>
}

export default BodyPage
