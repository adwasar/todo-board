function ListMenu({ cardMenuRef, deleteCard, card, closeMenu, setIsEditedTitle }) {
  return (
    <>
      <ul ref={cardMenuRef} className="card-menu">
        <li
          onClick={() => {
            deleteCard(card)
            closeMenu()
          }}
          className="card-menu__item"
        >
          Удалить карточку
        </li>
        <li
          onClick={() => {
            setIsEditedTitle(false)
            closeMenu()
          }}
          className="card-menu__item"
        >
          Редактировать
        </li>
      </ul>
    </>
  )
}

export default ListMenu
