import React from 'react'

import './styles/main.scss'

function App() {
  const columns = [
    { title: 'Сделать', cards: ['Разработка', 'Тестирование'] },
    { title: 'В процессе', cards: ['Дизайн'] },
    {
      title: 'Выполнено',
      cards: ['Бизнес логика'],
    },
  ]

  return (
    <div className="board">
      {columns.map((column, i) => {
        return (
          <div className="list" key={i}>
            <h2 className="list__title">{column.title}</h2>
            <ul className="list__cards">
              {column.cards.map((card, j) => {
                return (
                  <li className="list__card" key={j}>
                    {card}
                  </li>
                )
              })}
              <li className="list__card list__card_add">+ Добавить карточку</li>
            </ul>
          </div>
        )
      })}
      <div className="list list_add">
        <h2>+ Добавить лист</h2>
      </div>
    </div>
  )
}

export default App
