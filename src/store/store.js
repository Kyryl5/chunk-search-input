import { configureStore } from '@reduxjs/toolkit'
import lessonsSlice from '../features/lessons/lessonsSlice'

export const store = configureStore({
  reducer: {
    lessonsReducers: lessonsSlice,
  },
})
