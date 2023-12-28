import React, { useEffect } from "react"
import RegistrationForm from "../molecules/RegisterForm"
import BodyPage from "../organisms/BodyPage"
import LoginBtn from "../atoms/buttons/LoginBtn"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { Typography } from "@mui/material"

function Buy() {
  const navigate = useNavigate()
  const token = useSelector((state: RootState) => state.auth.token)

  useEffect(() => {
    if (token) {
      navigate("/dashboard")
    } else {
      navigate("/")
    }
  }, [token, navigate])
  return (
    <BodyPage>
      <Typography variant="h4">Compra efetuada!</Typography>
      <RegistrationForm />
      <LoginBtn />
    </BodyPage>
  )
}

export default Buy
