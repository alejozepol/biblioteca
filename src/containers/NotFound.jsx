import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/NotFound.scss';

import cryIcon from '../assets/static/llorando.png';

const NotFound = () => (

  <section className='not-found'>
    <div className='not-found__container'>
      <Link to='/home'>Vuelve al inicio</Link>
      <h2>Parece que algo esta roto, defectuoso o ya no existe.</h2>
      <img className='animated' src={cryIcon} alt='Llorando' />
      <p>Error 404</p>
      <p>Not Found</p>
    </div>
  </section>

);

export default NotFound;
