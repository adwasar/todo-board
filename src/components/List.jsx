import { useState, useEffect, useRef } from 'react'

import Card from './Card'
import ListMenu from './ListMenu'

function List({ column, columns, setColumns }) {
  const [cards, setCards] = useState(column.cards)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [titleName, setTitleName] = useState(column.title)
  const [isEditedTitle, setIsEditedTitle] = useState(true)

  const menuIconRef = useRef(null)
  const menuRef = useRef(null)
  const inputTitleRef = useRef(null)

  const newCard = { title: 'Новая карточка', done: false, id: new Date().getTime() }

  const addCard = () => {
    setCards([...cards, newCard])
  }

  const deleteCard = (card) => {
    setCards(cards.filter((el) => el.id !== card.id))
  }

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  const renameTitle = () => {
    setIsEditedTitle(false)
    closeMenu()
  }

  const deleteList = () => {
    setColumns(columns.filter((el) => el.id !== column.id))
    closeMenu()
  }

  const handleClickOutside = (e) => {
    if (!menuIconRef.current.contains(e.target) && !menuRef.current.contains(e.target)) {
      closeMenu()
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isEditedTitle) {
      setIsEditedTitle(true)
      inputTitleRef.current.blur()
    }
  }

  useEffect(() => {
    setCards(column.cards)
    setTitleName(column.title)
  }, [column])

  useEffect(() => {
    if (menuIsOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuIsOpen])

  useEffect(() => {
    if (!isEditedTitle && inputTitleRef.current) {
      inputTitleRef.current.focus()
    }
  }, [isEditedTitle])

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
              onKeyDown={handleKeyPress}
              ref={inputTitleRef}
            />
          )}
        </h2>
        <div onClick={toggleMenu} ref={menuIconRef} className="list-menu-icon">
          <span className="list-menu-icon__dot"></span>
          <span className="list-menu-icon__dot"></span>
          <span className="list-menu-icon__dot"></span>
        </div>

        {menuIsOpen ? (
          <ListMenu menuRef={menuRef} renameTitle={renameTitle} deleteList={deleteList} />
        ) : null}
      </div>
      <ul className="list__cards">
        {cards.map((card, j) => {
          return (
            <Card card={card} deleteCard={deleteCard} key={j} setCards={setCards} cards={cards} />
          )
        })}
        <li onClick={addCard} className="list__card list__card_add">
          + Добавить карточку
        </li>
      </ul>
    </div>
  )
}

export default List
