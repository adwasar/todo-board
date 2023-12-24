import Card from './Card'

function List({ column }) {
  return (
    <div className="list">
      <h2 className="list__title">{column.title}</h2>
      <ul className="list__cards">
        {column.cards.map((card, j) => {
          return <Card card={card} key={j} />
        })}
        <li className="list__card list__card_add">+ Добавить карточку</li>
      </ul>
    </div>
  )
}

export default List
