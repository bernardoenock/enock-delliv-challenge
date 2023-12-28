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
import ToastAlert from "../atoms/ToastAlert"
import { AuthActionTypes } from "../../features/auth/auth.interface"

function RegistrationForm() {
  const [toastAlertState, setToastAlertState] = useState<boolean>(false)
  const [toastMessage, setToastMessage] = useState<string>('')
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {auth} = useSelector((state: RootState) => state)

  const handleToast = () => {
    if (auth.type === AuthActionTypes.REGISTER_FAILURE) {
      setToastMessage("ERRO: Usuario pode já estar cadastrado.")
    }

    if (auth.type === AuthActionTypes.REGISTER_SUCCESS) {
      setToastMessage("Sucesso: Usuario cadastrado!")
      navigate("/login")
    }
  }

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

    setToastAlertState(true)
  }

  useEffect(() => {
    if (auth.token) {
      navigate("/dashboard")
    }
    if (auth.type) {
      handleToast()
    }
  }, [auth, navigate])

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Typography variant="h5">
          Crie sua conta para gerenciar seus pedidos!
        </Typography>
        <InputName />
        <InputEmail />
        <InputPassword />
        <SingInBtn />
      </FormContainer>
      <ToastAlert toastAlertState={toastAlertState} setToastAlertState={setToastAlertState} toastMessage={toastMessage}/>
    </>
  )
}

export default RegistrationForm
