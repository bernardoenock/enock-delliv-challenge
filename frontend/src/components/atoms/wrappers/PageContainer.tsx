import React from "react"
import { Container } from "@mui/material"
import { ReactNode } from "react"

interface PageContainerProps {
  children: ReactNode
}

function PageContainer({ children }: PageContainerProps) {
  return <Container>{children}</Container>
}

export default PageContainer
