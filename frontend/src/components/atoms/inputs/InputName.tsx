import React from "react"
import { TextField } from "@mui/material"

function InputName() {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="name"
      label="Name"
      name="name"
      autoComplete="name"
      autoFocus
    />
  )
}

export default InputName
