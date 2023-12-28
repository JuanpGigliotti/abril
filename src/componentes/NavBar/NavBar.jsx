import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
const NavBar = () => {
  return (
    <header>

        <nav>
            <h1>VINO</h1>
            <ul>
                <li>Sobre Nosotros</li>
                <li>Ayuda</li>
                <li>Productos</li>
            </ul>
            <CartWidget/>
        </nav>
        
    </header>
  )
}

export default NavBar