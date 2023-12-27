import React from "react"
import { useDispatch } from "react-redux"
import { logout } from "../../../features/auth/authActions"
import { useNavigate } from "react-router-dom"

import { IconButton } from "@mui/material"
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew"

function LogoutBtn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout() as any)
    navigate("/login")
  }
  return (
    <IconButton onClick={handleLogout}>
      <PowerSettingsNewIcon />
    </IconButton>
  )
}

export default LogoutBtn
