import React from 'react'

import List from './components/List'
import { columns } from './data'
import './styles/main.scss'

function App() {
  return (
    <div className="board">
      {columns.map((column, i) => (
        <List column={column} i={i} />
      ))}
      <div className="list list_add">
        <h2>+ Добавить лист</h2>
      </div>
    </div>
  )
}

export default App
