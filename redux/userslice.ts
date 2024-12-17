import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state

// Define the initial state using that type
const initialState = {
  user:null,
  userLoading:null
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setusers: (state, action) => {
     state.user = action.payload
    },
    setUserLoading: (state, action) => {
     state.userLoading = action.payload
    },
  },
})

export const { setusers , setUserLoading } = userSlice.actions;


export default userSlice.reducer