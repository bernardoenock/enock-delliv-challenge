import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../../features/auth/authActions"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../app/store"
import FormContainer from "../atoms/wrappers/FormContainer"
import InputName from "../atoms/inputs/InputName"
import InputEmail from "../atoms/inputs/InputEmail"
import InputPassword from "../atoms/inputs/InputPassword"
import SingInBtn from "../atoms/buttons/SingInBtn"
import { Typography } from "@mui/material"
import { AuthActionTypes } from "src/features/auth/auth.interface"
import ToastAlert from "../atoms/ToastAlert"

function RegistrationForm() {
  const dispatch = useDispatch()
  const error = useSelector((state: any) => state.error)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    dispatch(
      register(
        data.get("name") as string,
        data.get("email") as string,
        data.get("password") as string,
      ) as any,
    )
  }

  const navigate = useNavigate()
  const { auth } = useSelector((state: RootState) => state)

  console.log("Type Register", auth.type)
  console.log("ERROR Register", auth.error)

  const [toastAlertState, setToastAlertState] = useState<boolean>(false)
  const [toastMessage, setToastMessage] = useState<string>('')

  const handleToast = () => {
    if (auth.type === AuthActionTypes.REGISTER_FAILURE) {
      setToastMessage("ERRO: Usuario pode já estar cadastrado.")
      setToastAlertState(true)
    }

    if (auth.type === AuthActionTypes.REGISTER_SUCCESS) {
      setToastMessage("Sucesso: Usuario cadastrado!")
      setToastAlertState(true)
    }
  }

  useEffect(() => {
    if (auth.token) {
      navigate("/")
    }
  }, [auth.token, navigate])

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Typography variant="h5">
          Crie sua conta para gerenciar seus pedidos!
        </Typography>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <InputName />
        <InputEmail />
        <InputPassword />
        <SingInBtn />
      </FormContainer>
      <ToastAlert
        isOpen={toastAlertState}
        handleToast={handleToast}
        message={toastMessage}
      />
    </>
  )
}

export default RegistrationForm
