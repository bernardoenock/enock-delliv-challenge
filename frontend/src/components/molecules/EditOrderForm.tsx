import React, { useState } from "react"
import axios from "../../app/axiosConfig"
import { Button, TextField, Typography } from "@mui/material"

interface EditOrderFromProps {
  orderId?: string
  onUpdate: () => void
}

function EditOrderForm({ orderId, onUpdate }: EditOrderFromProps) {
  const [deliveryStatus, setDeliveryStatus] = useState("")

  const handleUpdateDeliveryStatus = async () => {
    try {
      if (!orderId) {
        console.error("Não há ID de pedido disponível.")
        return
      }

      const response = await axios.put(`/delivery/${orderId}`, {
        status: deliveryStatus,
      })

      console.log("Resposta do servidor:", response.data)
      onUpdate()
    } catch (error) {
      console.error("Erro ao atualizar status de entrega:", error)
    }
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Atualizar Status de Entrega
      </Typography>
      <TextField
        label="Novo Status de Entrega"
        variant="outlined"
        fullWidth
        value={deliveryStatus}
        onChange={(e) => setDeliveryStatus(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
        onClick={handleUpdateDeliveryStatus}
      >
        Atualizar Status
      </Button>
    </div>
  )
}

export default EditOrderForm
