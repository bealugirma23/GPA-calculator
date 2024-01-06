import { configureStore } from '@reduxjs/toolkit'
import gpaReducer from './redux/gpaSlice'
export const store = configureStore({
  reducer: {
    gpa: gpaReducer,
  },
})