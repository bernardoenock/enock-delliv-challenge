import React, { useEffect } from "react"
import BuyBtn from "../atoms/buttons/BuyBtn"
import LoginForm from "../molecules/LoginForm"
import BodyPage from "../organisms/BodyPage"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "src/app/store"

function Login() {
  const navigate = useNavigate()
  const token = useSelector((state: RootState) => state.auth.token)

  useEffect(() => {
    if (token) {
      navigate("/dashboard")
    }
  }, [token, navigate])
  return (
    <BodyPage>
      <LoginForm />
      <BuyBtn />
    </BodyPage>
  )
}

export default Login
