import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authReducer"
import usersReducer from "../features/users/usersReducer"
import deliveryReducer from "../features/delivery/deliveryReducer"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    delivery: deliveryReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
