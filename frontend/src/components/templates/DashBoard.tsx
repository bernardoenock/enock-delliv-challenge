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

function DashBoard() {
  const navigate = useNavigate()
  const token = useSelector((state: RootState) => state.auth.token)

  useEffect(() => {
    if (!token) {
      navigate("/login")
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
        <Map />
      </BodyPage>
      <FooterPage />
    </Box>
  )
}

export default DashBoard
