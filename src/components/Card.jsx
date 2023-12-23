function Card({ card, j }) {
  return (
    <>
      <li className="list__card" key={j}>
        {card}
      </li>
    </>
  )
}

export default Card
