import { createSlice } from '@reduxjs/toolkit'

import { columns } from '../../data'

const initialState = {
  value: columns,
}

export const columnsSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    addList: (state) => {
      state.value = [
        ...state.value,
        { title: 'Новая колонка', cards: [], id: new Date().getTime() },
      ]
    },
    deleteList: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload)
    },
    setTitleName: (state, action) => {
      const { columnId, newTitle } = action.payload
      const columnToUpdate = state.value.find((el) => el.id === columnId)

      if (columnToUpdate) {
        columnToUpdate.title = newTitle
      }
    },
    addCard: (state, action) => {
      const { columnId, cards } = action.payload
      const columnToUpdate = state.value.find((el) => el.id === columnId)

      if (columnToUpdate) {
        columnToUpdate.cards = cards
      }
    },
  },
})

export const { addList, deleteList, setTitleName, addCard } = columnsSlice.actions

export default columnsSlice.reducer
