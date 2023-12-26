import { useState, useEffect, useRef } from 'react'

import CardMenu from './CardMenu'

function Card({ card, deleteCard, setCards, cards }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [titleName, setTitleName] = useState(card.title)
  const [isEditedTitle, setIsEditedTitle] = useState(true)

  const cardMenuRef = useRef(null)
  const cardRef = useRef(null)
  const cardInputRef = useRef(null)

  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const handleClickOutside = (e) => {
    if (!cardMenuRef.current.contains(e.target) && !cardRef.current.contains(e.target)) {
      closeMenu()
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isEditedTitle) {
      setIsEditedTitle(true)
      cardInputRef.current.blur()
    }
  }

  useEffect(() => {
    if (!isEditedTitle && cardInputRef.current) {
      cardInputRef.current.focus()
    }
  }, [isEditedTitle])

  useEffect(() => {
    setCards(cards.map((el) => (el.id === card.id ? { ...el, title: titleName } : el)))
  }, [titleName])

  useEffect(() => {
    if (menuIsOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuIsOpen])

  return (
    <>
      <li className="list__card">
        <div className="list__card-content" ref={cardRef} onClick={toggleMenu}>
          {isEditedTitle ? (
            card.title
          ) : (
            <input
              type="text"
              className="list__card-input"
              value={titleName}
              onChange={(e) => setTitleName(e.target.value)}
              onBlur={() => setIsEditedTitle(true)}
              onKeyDown={handleKeyPress}
              ref={cardInputRef}
            />
          )}
          <div className={`arrow ${menuIsOpen ? 'arrow_open' : null}`}>
            <span className="arrow__ll"></span>
            <span className="arrow__rr"></span>
          </div>
        </div>
        {menuIsOpen ? (
          <CardMenu
            cardMenuRef={cardMenuRef}
            deleteCard={deleteCard}
            card={card}
            closeMenu={closeMenu}
            setIsEditedTitle={setIsEditedTitle}
          />
        ) : null}
      </li>
    </>
  )
}

export default Card
