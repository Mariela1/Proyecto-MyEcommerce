import React from 'react'

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
                <a className="nav__link" href="#">Carrito</a>
            </li>

        </ul>

    </div>

  )
}

export default NavBar;