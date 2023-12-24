function ListMenu({ menuRef, renameTitle, deleteList }) {
  return (
    <>
      <ul ref={menuRef} className="list-menu">
        <li onClick={deleteList} className="list-menu__item">
          Удалить колонку
        </li>
        <li onClick={renameTitle} className="list-menu__item">
          Редактировать
        </li>
      </ul>
    </>
  )
}

export default ListMenu
