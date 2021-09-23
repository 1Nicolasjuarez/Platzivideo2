
import React from 'react';
import '../assets/style/components/Categories.scss';

const Categories = ({ children, title }) => (

  <div className='categories'>
    <h1 className='categories__title'>{title}</h1>
    {children}
  </div>

);

export default Categories;
