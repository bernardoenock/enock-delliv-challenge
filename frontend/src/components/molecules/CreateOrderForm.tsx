import React, { useState } from "react"
import { useSelector } from "react-redux"
import axios from "../../app/axiosConfig"
import { Button, TextField, Typography, Modal, Box } from "@mui/material"
import { RootState } from "../../app/store"
import ToastAlert from "../atoms/ToastAlert"

interface DeliveryData {
  status: string
  country: string
  city: string
  state: string
  street: string
  district: string
  code: string
  [key: string]: string
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

function CreateOrderForm() {
  const [toastAlertState, setToastAlertState] = useState<boolean>(false)
  const [toastMessage, setToastMessage] = useState<string>("")

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [deliveryData, setDeliveryData] = useState<DeliveryData>({
    status: "",
    country: "",
    city: "",
    state: "",
    street: "",
    district: "",
    code: "",
  })

  const { id } = useSelector((state: RootState) => state.users.user)

  const handleInputChange = (field: string, value: string) => {
    setDeliveryData({ ...deliveryData, [field]: value })
  }

  const handleUpdateDeliveryStatus = async () => {
    try {
      if (!id) {
        setToastMessage("User not found.")
        return
      }

      const response = await axios.post(`/delivery/${id}`, deliveryData)
      console.log("Server response:", response.data)
      setToastMessage(response.data.message)
      setToastAlertState(true)
      handleClose()
    } catch (error) {
      console.error("Error updating delivery:", error)
      setToastMessage("Error updating delivery")
    }
  }

  const renderTextField = (label: string, field: string) => (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      required
      value={deliveryData[field]}
      onChange={(e) => handleInputChange(field, e.target.value)}
      sx={{ mb: 1 }}
    />
  )

  return (
    <>
      <Box>
        <Button variant="contained" onClick={handleOpen}>
          Criar Pedido
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography variant="h6" gutterBottom>
              Criar pedido
            </Typography>
            {renderTextField("Status:", "status")}
            {renderTextField("Pais:", "country")}
            {renderTextField("Cidade:", "city")}
            {renderTextField("Estado:", "state")}
            {renderTextField("Rua:", "street")}
            {renderTextField("Bairro:", "district")}
            {renderTextField("CEP:", "code")}
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}
              onClick={handleUpdateDeliveryStatus}
            >
              Criar
            </Button>
          </Box>
        </Modal>
      </Box>
      <ToastAlert
        toastAlertState={toastAlertState}
        setToastAlertState={setToastAlertState}
        toastMessage={toastMessage}
      />
    </>
  )
}

export default CreateOrderForm
