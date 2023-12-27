import React from "react"
import { IconButton, Badge } from "@mui/material"
import Logo from "../logo/Logo"
import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"

function BrandBtn() {
  const deliveryOrders = useSelector(
    (state: RootState) => state.delivery.deliveryOrders,
  )

  return (
    <IconButton sx={{ backgroundColor: "white" }}>
      <Badge badgeContent={deliveryOrders.length} color="primary">
        <Logo />
      </Badge>
    </IconButton>
  )
}

export default BrandBtn
