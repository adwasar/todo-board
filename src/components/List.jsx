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
      <h2 className="list__title">{column.title}</h2>
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
