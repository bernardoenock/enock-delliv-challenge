import { Box } from "@mui/material"
import { ReactNode } from "react"

interface FormContainerProps {
  children: ReactNode
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

function FormContainer({ children, onSubmit }: FormContainerProps) {
  return (
    <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
      {children}
    </Box>
  )
}

export default FormContainer
