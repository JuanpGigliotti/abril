import React from 'react'
import "./Banner.css"
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-container'>
            <h1>"Wine is the answer, what was the question?"</h1>
        </div>
        <div className='categorias'>
                <ul>
                    <li><Link to='/categoria/1'>Tinto</Link></li>
                    <li><Link to='/categoria/2'>Blanco</Link></li>
                    <li><Link to='/categoria/3'>Rosado</Link></li>
                    <li><Link to='/categoria/4'>Espumoso</Link></li>
                </ul>
            </div>
    </div>
  )
}

export default Banner