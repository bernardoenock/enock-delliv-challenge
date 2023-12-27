import React from "react"
import { TextField } from "@mui/material"

function InputPassword() {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
    />
  )
}

export default InputPassword
