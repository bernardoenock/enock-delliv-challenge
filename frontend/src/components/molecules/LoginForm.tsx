import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../features/auth/authActions"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../app/store"
import SingInBtn from "../atoms/buttons/SingInBtn"
import InputPassword from "../atoms/inputs/InputPassword"
import InputEmail from "../atoms/inputs/InputEmail"
import FormContainer from "../atoms/wrappers/FormContainer"

const LoginForm: React.FC = () => {
  const dispatch = useDispatch()
  const error = useSelector((state: any) => state.error)
  console.log("LOGIN ERROR:", error)
  const navigate = useNavigate()
  const token = useSelector((state: RootState) => state.auth.token)

  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token, navigate])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    dispatch(
      login(data.get("email") as string, data.get("password") as string) as any,
    )
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Login</h2>
      <InputEmail />
      <InputPassword />
      <SingInBtn />
    </FormContainer>
  )
}

export default LoginForm