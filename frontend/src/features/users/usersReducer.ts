import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UsersState {
  user: any
}

const initialState: UsersState = {
  user: {},
}

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<any[]>) => {
      state.user = action.payload
    },
  },
})

export const { setUsers } = usersSlice.actions
export default usersSlice.reducer
