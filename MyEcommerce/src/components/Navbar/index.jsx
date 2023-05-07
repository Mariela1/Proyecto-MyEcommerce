import React from 'react'
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import './navBar.css'

const NavBar = () => {
  return (
    <div className='container'>
        <div className='nav__brand'>
            <NavLink className="nav__link" to='/'>Home</NavLink>
        </div>
        <ul className='nav__list'>
            <li>
                <NavLink className="nav__link" to='/categoria/Electronics'>Electronics</NavLink>
            </li>
            <li>
                <NavLink className="nav__link" to='/categoria/Shoes'>Shoes</NavLink>
            </li>
            <li>
                <NavLink className="nav__link" to='/categoria/Furniture'>Furniture</NavLink>
            </li>
            <li>
                <NavLink className="nav__link" to='/categoria/Clothes'>Clothes</NavLink>
            </li>
            <li>
                <NavLink className="nav__link" to='/categoria/Others'>Others</NavLink>
            </li>
         

            <li>
                <NavLink className="nav__link" to='cart'>
                    <CartWidget/>
                </NavLink>
            </li>

        </ul>

    </div>

  )
}

export default NavBar;