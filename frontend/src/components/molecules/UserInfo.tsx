import React, { useEffect } from "react"
import axios from "../../app/axiosConfig"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { setUsers } from "../../features/users/usersReducer"
import { Typography } from "@mui/material"

function UserInfo() {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users.user)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/users/profile")
        dispatch(setUsers(response.data.result) as any)
      } catch (error) {
        console.error("Erro ao buscar usuários:", error)
      }
    }

    fetchUsers()
  }, [dispatch])

  return (
    <Typography
      sx={{
        "@media (max-width:1400px)": {
          display: "none",
        },
      }}
    >
      Loja do {users.name}
    </Typography>
  )
}

export default UserInfo
