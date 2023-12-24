import { useState, useEffect, useRef } from 'react'

import Card from './Card'
import ListMenu from './ListMenu'

function List({ column }) {
  const [cards, setCards] = useState(column.cards)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [titleName, setTitleName] = useState(column.title)
  const [isEditedTitle, setIsEditedTitle] = useState(true)

  const menuIconRef = useRef(null)
  const menuRef = useRef(null)

  const newCard = 'Новая карточка'

  const addCard = () => {
    setCards([...cards, newCard])
  }

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  const handleClickOutside = (e) => {
    if (!menuIconRef.current.contains(e.target) && !menuRef.current.contains(e.target)) {
      closeMenu()
    }
  }

  useEffect(() => {
    if (menuIsOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuIsOpen])

  return (
    <div className="list">
      <div className="list__header">
        <h2 className="list__title">
          {isEditedTitle ? (
            titleName
          ) : (
            <input
              type="text"
              className="list__title-input"
              value={titleName}
              onChange={(e) => setTitleName(e.target.value)}
              onBlur={() => setIsEditedTitle(true)}
            />
          )}
        </h2>
        <div onClick={toggleMenu} ref={menuIconRef} className="list-menu-icon">
          <span className="list-menu-icon__dot"></span>
          <span className="list-menu-icon__dot"></span>
          <span className="list-menu-icon__dot"></span>
        </div>

        {menuIsOpen ? (
          <ListMenu
            menuRef={menuRef}
            column={column}
            closeMenu={closeMenu}
            setIsEditedTitle={setIsEditedTitle}
          />
        ) : null}
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
