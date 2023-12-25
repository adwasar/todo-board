function ListMenu({ cardMenuRef }) {
  return (
    <>
      <ul ref={cardMenuRef} className="card-menu">
        <li className="card-menu__item">Удалить карточку</li>
        <li className="card-menu__item">Редактировать</li>
      </ul>
    </>
  )
}

export default ListMenu
