import React, { ReactNode } from "react"
import { Modal, Box, SxProps, Button } from "@mui/material"
import EditNoteIcon from "@mui/icons-material/EditNote"
import EditOrderForm from "./EditOrderForm"

const style: SxProps = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  width: "96%",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

interface EditOrderModalProps {
  children: ReactNode
  orderId?: string
  open: boolean
  onClose: () => void
  onOpen: () => void
  onUpdate: () => void
}

function EditOrderModal({
  children,
  orderId,
  open,
  onClose,
  onOpen,
  onUpdate,
}: EditOrderModalProps) {
  const handleOpen = () => {
    onOpen()
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#69a9c2",
          color: "white",
          fontSize: "0.7rem",
          mb: 1,
        }}
        fullWidth
        startIcon={<EditNoteIcon />}
        onClick={handleOpen}
      >
        {children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditOrderForm orderId={orderId} onUpdate={onUpdate} />
        </Box>
      </Modal>
    </>
  )
}

export default EditOrderModal
