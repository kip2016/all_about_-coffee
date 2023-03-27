import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


const Navbar = () => {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/roast">Roasting</Link>
      </li>
      <li>
        <Link to="/grind">Grinding</Link>
      </li>
      <li>
        <Link to="/brew">Brewing</Link>
      </li>
      <li>
        <Link to="/drinks">Drinks</Link>
      </li>
      <li>
        <Link to="/survey">Survey</Link>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar