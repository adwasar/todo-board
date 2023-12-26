import { useState, useEffect, useRef } from 'react'

import CardMenu from './CardMenu'

function Card({ card, deleteCard }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const cardMenuRef = useRef(null)
  const cardRef = useRef(null)

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
          {card.title}
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
          />
        ) : null}
      </li>
    </>
  )
}

export default Card
