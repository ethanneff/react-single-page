// Lib
import React from 'react'
import { Link } from 'react-router'

// Component
const NavLink = props => (
  <Link {...props} activeClassName='active' />
  )

// Public
export default NavLink
