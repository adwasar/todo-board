import { configureStore } from '@reduxjs/toolkit'

import columnsSlice from './slices/columnsSlice'

export const store = configureStore({
  reducer: {
    columns: columnsSlice,
  },
})
