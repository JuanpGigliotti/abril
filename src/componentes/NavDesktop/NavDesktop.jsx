import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import './NavDesktop.css'

const NavDesktop = () => {
  return (
    <header>
        <nav>
            <div className='Nav-Desktop-Izq'>
                <ul>
                    <li><NavLink to='/catalogo'>CATALOGO</NavLink></li>
                    <li><NavLink to='/sobrenosotros'>NOSOTROS</NavLink></li>
                    <li><NavLink to='/contacto'>CONTACTO</NavLink> </li>
                </ul>
            </div>
            <Link to="/" className='logo'>WINE NOT</Link>
            <div className='Nav-Desktop-Der'>
                <NavLink to="/buscador"><img src='./img/Buscador.png' className='imgnav' alt="Ícono de buscador"></img></NavLink>
                <NavLink to="/usuario"><img src="./img/User.png" className='imgnav' alt="Ícono de usuario"></img></NavLink>
                <div className='Carrito-icon'>
                    <img className='imgnav' src="./img/Cart.png" alt="Ícono de carrito"/>
                    <strong>1</strong>
                </div> 
            </div>
        </nav>
        <div className='categorias'>
                <ul>
                    <li><Link to='/categoria/1'>Tinto</Link></li>
                    <li><Link to='/categoria/2'>Blanco</Link></li>
                    <li><Link to='/categoria/3'>Rosado</Link></li>
                    <li><Link to='/categoria/4'>Espumoso</Link></li>
                    <li><Link to='/categoria/5'>proximamente</Link></li>
                </ul>
            </div>
    </header>
  )
}

export default NavDesktop