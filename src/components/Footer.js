import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div>
    <footer>
    <nav>
      <ul>
        <li><Link to="index.html">Home</Link>
        </li>
        <li>
        <Link to="roasting.html">Roasting</Link>
        </li>
        <li>
        <Link to="grinding.html">Grinding</Link>
        </li>
        <li>
        <Link to="brewing.html">Brewing</Link>
        </li>
        <li>
        <Link to="drinks.html">Drinks</Link>
        </li>
        <li>
        <Link to="survey.html">Coffee survey</Link>
        </li>
      </ul>
    </nav>
  </footer>
    </div>
  )
}

export default Footer