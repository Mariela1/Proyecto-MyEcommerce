import React from 'react'
import CartWidget from '../CartWidget';

const NavBar = () => {
  return (
    <div className='container'>
        <div className='nav__brand'>
            <a className="nav__link" href="#">Mi marca</a>
        </div>
        <ul className='nav__list'>
            <li>
                <a className="nav__link" href="#">Categoria 1</a>
            </li>
            <li>
                <a className="nav__link" href="#">Categoria 2</a>
            </li>
            <li>
                <a className="nav__link" href="#">
                    <CartWidget/>
                </a>
            </li>

        </ul>

    </div>

  )
}

export default NavBar;