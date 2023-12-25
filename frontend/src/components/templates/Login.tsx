import React from "react"
import BuyBtn from "../atoms/buttons/BuyBtn"
import LoginForm from "../molecules/LoginForm"
import BodyPage from "../organisms/BodyPage"

function Login() {
  return (
    <BodyPage>
      <LoginForm />
      <BuyBtn />
    </BodyPage>
  )
}

export default Login
