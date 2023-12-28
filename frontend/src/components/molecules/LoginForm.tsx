import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../features/auth/authActions"
import SingInBtn from "../atoms/buttons/SingInBtn"
import InputPassword from "../atoms/inputs/InputPassword"
import InputEmail from "../atoms/inputs/InputEmail"
import FormContainer from "../atoms/wrappers/FormContainer"
import ToastAlert from "../atoms/ToastAlert"

function LoginForm() {
  const [toastAlertState, setToastAlertState] = useState<boolean>(false)
  const [toastMessage, setToastMessage] = useState<string>("")

  const dispatch = useDispatch()
  const error = useSelector((state: any) => state.error)
  console.log("LOGIN ERROR:", error)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    dispatch(
      login(data.get("email") as string, data.get("password") as string) as any,
    )
    setToastMessage("Login sucesso!")
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Login</h2>
        <InputEmail />
        <InputPassword />
        <SingInBtn />
      </FormContainer>
      <ToastAlert
        toastAlertState={toastAlertState}
        setToastAlertState={setToastAlertState}
        toastMessage={toastMessage}
      />
    </>
  )
}

export default LoginForm
