import React, { useState } from 'react'

import List from './components/List'
import { columns as initialColumns } from './data'
import './styles/main.scss'

function App() {
  const [columns, setColumns] = useState(initialColumns)

  const addColumn = () => {
    setColumns([...columns, { title: 'Новая колонка', cards: [] }])
  }

  return (
    <div className="board">
      {columns.map((column, i) => (
        <List column={column} key={i} />
      ))}
      <div className="list list_add">
        <h2 onClick={addColumn}>+ Добавить лист</h2>
      </div>
    </div>
  )
}

export default App
