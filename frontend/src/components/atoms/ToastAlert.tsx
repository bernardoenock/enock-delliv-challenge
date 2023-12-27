import React from "react"
import { IconButton, Snackbar } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

interface ToastAlertProps {
  isOpen: boolean
  handleToast: () => void
  message: string
}

function ToastAlert({ isOpen, handleToast, message }: ToastAlertProps) {
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleToast}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleToast}
        message={message}
        action={action}
      />
    </>
  )
}

export default ToastAlert
