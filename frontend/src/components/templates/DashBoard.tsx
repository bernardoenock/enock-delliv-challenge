import React from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { RootState } from "../../app/store"
import Map from "../molecules/Map"
import HeadPage from "../organisms/HeadPage"
import FooterPage from "../organisms/FooterPage"
import BodyPage from "../organisms/BodyPage"
import { Box } from "@mui/material"
import OrdersListContent from "../molecules/OrdersListContent"
import CreateOrderForm from "../molecules/CreateOrderForm"

function DashBoard() {
  const navigate = useNavigate()
  const token = useSelector((state: RootState) => state.auth.token)

  useEffect(() => {
    if (!token) {
      navigate("/login")
    } else {
      navigate("/dashboard")
    }
  }, [token, navigate])

  if (!token) {
    return null
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100vh",
      }}
    >
      <HeadPage />
      <BodyPage>
        <CreateOrderForm />
        <Box
          sx={{
            display: "flex",
          }}
        >
          <OrdersListContent />
          <Map />
        </Box>
      </BodyPage>
      <FooterPage />
    </Box>
  )
}

export default DashBoard
