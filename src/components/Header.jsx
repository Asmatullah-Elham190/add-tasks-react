import React from 'react'
import '../App.css'
import { NavLink,Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header>
      <Link to='/' className={{margin:"10px"}}>
       Logo
      </Link>
      <NavLink to='/' className='nav'>Home </NavLink>
      <NavLink to='/product' className='nav' >product </NavLink>
      <NavLink to='/product-list'  className='nav'>Product-list </NavLink>
      <NavLink to='/contact'  className='nav'>Contact</NavLink>
    </header>
  )
}
