import React from "react"
import { Box } from "@mui/material"
import BrandBtn from "../atoms/buttons/BrandBtn"
import LogoutBtn from "../atoms/buttons/LogoutBtn"
import NavContainer from "../atoms/wrappers/NavContainer"
import OrdersListModal from "../molecules/OrdersListModal"
import UserInfo from "../molecules/UserInfo"

function HeadPage() {
  return (
    <NavContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "30%",
        }}
      >
        <BrandBtn />
        <UserInfo />
        <OrdersListModal />
      </Box>
      <Box sx={{ width: "5%" }}>
        <LogoutBtn />
      </Box>
    </NavContainer>
  )
}

export default HeadPage
