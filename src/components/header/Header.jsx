import React from 'react'
import { FaBars, FaUtensils } from 'react-icons/fa'
import { useSelector } from 'react-redux'
const Header = () => {
  const data = useSelector((state) => state.data.header)
  return (
    <header>
      <a
        href="#"
        className="logo"
      >
        <FaUtensils className="icon" />
        food
      </a>
      {/* <div id="menu-bar"> */}
      <FaBars id="menu-bar" />
      {/* </div> */}
      <nav className="navbar">
        {data.map((item) => {
          const { id, title, href } = item
          return (
            <a
              key={id}
              href={`#${href}`}
            >
              {title}
            </a>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
