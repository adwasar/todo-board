function ListMenu({
  cardMenuRef,
  deleteCard,
  card,
  closeMenu,
  setIsEditedTitle,
  doneStatus,
  setDoneStatus,
}) {
  return (
    <>
      <ul ref={cardMenuRef} className="card-menu">
        <li
          onClick={() => {
            setDoneStatus(!doneStatus)
            closeMenu()
          }}
          className="card-menu__item"
        >
          Переключить статус "выполнено"
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
        <li
          onClick={() => {
            deleteCard(card)
            closeMenu()
          }}
          className="card-menu__item"
        >
          Удалить карточку
        </li>
      </ul>
    </>
  )
}

export default ListMenu
