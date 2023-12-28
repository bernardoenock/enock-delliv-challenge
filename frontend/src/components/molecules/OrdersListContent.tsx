import React, { useEffect, useState } from "react"
import axios from "../../app/axiosConfig"
import OrderContent from "../atoms/OrderContent"
import { Box, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { setDeliveryOrders } from "../../features/delivery/deliveryReducer"
import EditOrderModal from "./EditOrderModal"

interface OrdersListContentProps {
  closeOrdersListModal?: () => void
}

function OrdersListContent({ closeOrdersListModal }: OrdersListContentProps) {
  const dispatch = useDispatch()
  const [editModalOpen, setEditModalOpen] = useState(false)
  const deliveryOrders = useSelector(
    (state: RootState) => state.delivery.deliveryOrders,
  )

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/delivery")

        dispatch(setDeliveryOrders(response.data.result))
      } catch (error) {
        console.error("Erro ao buscar Pedidos:", error)
      }
    }

    fetchOrders()
  }, [dispatch])

  const handleEditOrder = () => {
    setEditModalOpen(true)
  }

  const handleEditModalClose = () => {
    setEditModalOpen(false)
  }

  const handleUpdateSuccess = () => {
    handleEditModalClose()
    if (closeOrdersListModal){
      closeOrdersListModal()
    }
  }

  return (
    <Box>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Lista de Pedidos
      </Typography>
      {deliveryOrders.length > 0 ? (
        <Box id="modal-modal-description">
          {deliveryOrders.map((order: any) => (
            <EditOrderModal
              key={order.id}
              orderId={order.id}
              open={editModalOpen}
              onClose={handleEditModalClose}
              onOpen={handleEditOrder}
              onUpdate={handleUpdateSuccess}
            >
              <OrderContent
                keyId={order.id}
                country={order.country}
                city={order.city}
                state={order.state}
                street={order.street}
                district={order.district}
                code={order.code}
                status={order.status}
              />
            </EditOrderModal>
          ))}
        </Box>
      ) : (
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Sem pedidos por agora...
        </Typography>
      )}
    </Box>
  )
}

export default OrdersListContent
