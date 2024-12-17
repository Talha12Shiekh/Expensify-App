import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UserState {
  user: string | null,
  userLoading:boolean | null
}

// Define the initial state using that type
const initialState: UserState = {
  user:null,
  userLoading:null
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setusers: (state, action: PayloadAction<string>) => {
     state.user = action.payload
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
     state.userLoading = action.payload
    },
  },
})

export const { setusers , setUserLoading } = userSlice.actions;


export default userSlice.reducer