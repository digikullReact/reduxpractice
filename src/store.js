import { configureStore } from '@reduxjs/toolkit'
import comSlice from "./slices/com"
import ghSlice from "./slices/gh"

export const store = configureStore({
  reducer: {
    comSlice:comSlice,
    gh:ghSlice
  },
})