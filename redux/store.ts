import { configureStore } from '@reduxjs/toolkit';
import user from "./userslice";

export const store = configureStore({
  reducer: {
    user,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
