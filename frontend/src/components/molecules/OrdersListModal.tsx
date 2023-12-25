import React from "react"
import { useState } from "react"
import { Modal, Box, SxProps } from "@mui/material"
import OrdersListBtn from "../atoms/buttons/OrdersListBtn"
import OrdersListContent from "./OrdersListContent"

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

function OrdersListModal() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <OrdersListBtn onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <OrdersListContent closeOrdersListModal={handleClose} />
        </Box>
      </Modal>
    </>
  )
}

export default OrdersListModal
