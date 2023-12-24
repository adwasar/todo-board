import Card from './Card'
import { useState } from 'react'

function List({ column }) {
  const [cards, setCards] = useState(column.cards)

  const newCard = 'Новая карточка'

  const addCard = () => {
    setCards([...cards, newCard])
  }

  return (
    <div className="list">
      <div className="list__header">
        <h2 className="list__title">{column.title}</h2>
        <div class="menu-icon">
          <span className="menu-icon__dot"></span>
          <span className="menu-icon__dot"></span>
          <span className="menu-icon__dot"></span>
        </div>
      </div>
      <ul className="list__cards">
        {cards.map((card, j) => {
          return <Card card={card} key={j} />
        })}
        <li onClick={addCard} className="list__card list__card_add">
          + Добавить карточку
        </li>
      </ul>
    </div>
  )
}

export default List
