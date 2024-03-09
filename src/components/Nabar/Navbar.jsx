import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav className='navbar'>
        <Link className='navbar-logo' to={"/"}>WINE NOT</Link>
        <Link className='seeCarrito' to={"/cart"}> <img src='../../../public/img/Cart.png'></img> </Link>
        </nav>

    </div>
  )
}

export default Navbar