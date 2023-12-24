import React, { useState } from 'react'

import List from './components/List'
import { columns as initialColumns } from './data'
import DataContext from './context'
import './styles/main.scss'

function App() {
  const [columns, setColumns] = useState(initialColumns)

  const newList = { title: 'Новая колонка', cards: [], id: new Date().getTime() }

  const addColumn = () => {
    setColumns([...columns, newList])
  }

  const dataContext = { columns, setColumns }

  return (
    <DataContext.Provider value={dataContext}>
      <div className="board">
        {columns.map((column, i) => (
          <List column={column} key={i} />
        ))}
        <div className="list list_add">
          <h2 onClick={addColumn}>+ Добавить лист</h2>
        </div>
      </div>
    </DataContext.Provider>
  )
}

export default App
