import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../../features/auth/authActions"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../app/store"
import FormContainer from "../atoms/wrappers/FormContainer"
import InputName from "../atoms/inputs/InputName"
import InputEmail from "../atoms/inputs/InputEmail"
import InputPassword from "../atoms/inputs/InputPassword"
import SingInBtn from "../atoms/buttons/SingInBtn"

function RegistrationForm(){
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
  const token = useSelector((state: RootState) => state.auth.token)

  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token, navigate])

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Crie sua conta</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <InputName />
      <InputEmail />
      <InputPassword />
      <SingInBtn />
    </FormContainer>
  )
}

export default RegistrationForm
