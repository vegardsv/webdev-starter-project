import React from 'react'
import { Link } from 'react-router'

let Nav = () =>
  <ul>
    <li>
      <Link to="/counter">Counter</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>

export default Nav
