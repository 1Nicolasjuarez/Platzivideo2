/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import '../assets/style/App.scss';
import Search from '../components/Search.jsx';
import Categories from '../components/Categories.jsx';
import Carousel from '../components/Carousel.jsx';
import CarouselItem from '../components/CarouselItem.jsx';
import Footer from '../components/Footer.jsx';
import useInitialState from '../hooks/useInitialState.js';
//import { sync } from 'enhanced-resolve';

const API = ' http://localhost:3000/initialState';
const API2  = 'https://jsonplaceholder.typicode.com/users/1/todos';

const App = () => {

  const initialState = useInitialState(API);
  return (

    <div className='App'>
      <Header />
      <Search />
      <Categories title='Mi Lista'>
        <Carousel>
          {initialState.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
          <CarouselItem />
        </Carousel>
      </Categories>
    </div>
  );
};
export default App;


/*<ul>
        {videos.trends.map((item) => (
          <li key={item.id}>
            {' '}
            {item.title}
            {' '}
          </li>
        ))}
      </ul><ul>
        {videos.trends.map((item) => (
          <li key={item.id}>
            {' '}
            {item.title}
            {' '}
          </li>
        ))}
      </ul> 
      
      <Categories title='Mi Lista'>
        <Carousel>
          {videos.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
          <CarouselItem />
        </Carousel>
      </Categories>
      
      
      
      */