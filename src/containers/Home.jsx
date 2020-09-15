import React from 'react';

import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';

import '../assets/styles/App.scss';

const Home = () =>  (
  <>
    <Header />
      <Categories title='Libros recomendados'>
        <Carousel/>
      </Categories>
  </>
);


export default Home;
