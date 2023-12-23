import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../features/auth/authActions"

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const error = useSelector((state: any) => state.error)

  const handleLogin = () => {
    dispatch(login(email, password) as any)
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginForm
