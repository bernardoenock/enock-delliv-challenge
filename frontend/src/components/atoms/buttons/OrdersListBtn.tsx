import React from "react"
import { Button, IconButton, Typography } from "@mui/material"
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining"

interface OrdersListBtnProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function OrdersListBtn({ onClick }: OrdersListBtnProps) {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          backgroundColor: "#3e5aad",
          ":hover": {
            backgroundColor: "#5575d6",
          },
          "@media (max-width:1000px)": {
            display: "none",
          },
        }}
        endIcon={<DeliveryDiningIcon />}
        onClick={onClick}
      >
        <Typography variant="button">Gerenciar Pedidos</Typography>
      </Button>
      <IconButton
        sx={{
          color: "white",
          backgroundColor: "#3e5aad",
          ":hover": {
            backgroundColor: "#5575d6",
          },
          "@media (min-width:1000px)": {
            display: "none",
          },
        }}
        onClick={onClick}
      >
        <DeliveryDiningIcon />
      </IconButton>
    </>
  )
}

export default OrdersListBtn
