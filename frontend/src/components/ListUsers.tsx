import React, { useEffect, useState } from "react"
import axios from "../app/axiosConfig"

const ListUsers: React.FC = () => {
  const [users, setUsers] = useState<any>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4242/users")
        console.log("users", response)
        setUsers(response.data.result)
      } catch (error) {
        console.error("Erro ao buscar usuários:", error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListUsers
