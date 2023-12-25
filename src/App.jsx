import React, { useState } from 'react'

import List from './components/List'
import { columns as initialColumns } from './data'
import './styles/main.scss'

function App() {
  const [columns, setColumns] = useState(initialColumns)

  const newList = { title: 'Новая колонка', cards: [], id: new Date().getTime() }

  const addColumn = () => {
    setColumns([...columns, newList])
  }

  return (
    <div className="board">
      {columns.map((column, i) => (
        <List column={column} columns={columns} setColumns={setColumns} key={i} />
      ))}
      <div onClick={addColumn} className="list list_add">
        <div className="list__header">
          <h2 className="list__title">+ Добавить лист</h2>
        </div>
      </div>
    </div>
  )
}

export default App
