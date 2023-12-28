import React from "react"
import { IconButton, Snackbar } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

interface ToastAlertProps {
  toastAlertState: boolean
  setToastAlertState: React.Dispatch<React.SetStateAction<boolean>>
  toastMessage: string
}

function ToastAlert({toastAlertState, setToastAlertState, toastMessage}: ToastAlertProps) {

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setToastAlertState(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <>
      <Snackbar
        open={toastAlertState}
        autoHideDuration={6000}
        onClose={handleClose}
        message={toastMessage}
        action={action}
      />
    </>
  )
}

export default ToastAlert
