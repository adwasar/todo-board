import { useContext } from 'react'

import DataContext from '../context'

function ListMenu({ menuRef, column, closeMenu, setIsEditedTitle }) {
  const dataContext = useContext(DataContext)

  const deleteList = () => {
    dataContext.setColumns(dataContext.columns.filter((el) => el.id !== column.id))
    closeMenu()
  }

  const renameTitle = () => {
    setIsEditedTitle(false)
    closeMenu()
  }

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
