import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface DeliveryState {
  deliveryOrders: any[]
}

const initialState: DeliveryState = {
  deliveryOrders: [],
}

const deliverySlice = createSlice({
  name: "deliveryOrders",
  initialState,
  reducers: {
    setDeliveryOrders: (state, action: PayloadAction<any[]>) => {
      state.deliveryOrders = action.payload
    },
  },
})

export const { setDeliveryOrders } = deliverySlice.actions
export default deliverySlice.reducer
