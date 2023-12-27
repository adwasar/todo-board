import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addList } from './store/slices/columnsSlice'

import List from './components/List'
import { columns as initialColumns } from './data'
import './styles/main.scss'

function App() {
  const columnsStore = useSelector((state) => state.columns.value)
  const dispatch = useDispatch()

  const addColumn = () => {
    dispatch(addList())
  }

  useEffect(() => {
    console.log(columnsStore)
  }, [columnsStore])

  return (
    <div className="board">
      {columnsStore.map((column, i) => (
        <List column={column} key={i} />
      ))}
      <div onClick={addColumn} className="list list_add">
        <div className="list__header">
          <h2 className="list__title">+ Добавить колонку</h2>
        </div>
      </div>
    </div>
  )
}

export default App
