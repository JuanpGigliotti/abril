import React, { useContext } from 'react';
import "./Banner.css";
import { Link } from 'react-router-dom';
import { dataContext } from '../Context/DataContext';

const Banner = () => {
  const { setSelectedCategory } = useContext(dataContext);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className='banner'>
      <div className='banner-container'>
        <h1>"Wine is the answer, what was the question?"</h1>
      </div>
      <div className='categorias'>
        <ul>
          <li>
            <Link to='/categoria/1' onClick={() => handleCategoryClick(1)}>
              Tinto
            </Link>
          </li>
          <li>
            <Link to='/categoria/2' onClick={() => handleCategoryClick(2)}>
              Blanco
            </Link>
          </li>
          <li>
            <Link to='/categoria/3' onClick={() => handleCategoryClick(3)}>
              Rosado
            </Link>
          </li>
          <li>
            <Link to='/categoria/4' onClick={() => handleCategoryClick(4)}>
              Espumoso
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
