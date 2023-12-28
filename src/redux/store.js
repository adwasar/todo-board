import { configureStore } from '@reduxjs/toolkit'

import { saveState, loadState } from '../helpers/localStorage'
import columnsSlice from './slices/columnsSlice'

const preloadedState = loadState()

export const store = configureStore({
  reducer: {
    columns: columnsSlice,
  },
  preloadedState,
})

store.subscribe(() => {
  const state = store.getState()
  saveState(state)
})
