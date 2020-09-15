/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions/index';

import Header from '../components/Header';

import '../assets/styles/components/Register.scss';

const Register = (props) => {

  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (e) => {

    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.registerRequest(form);
    props.history.push('/home');
  };

  return (
    <>
      <Header isLogin />
      <section className='register'>
        <section className='register__container'>
          <h2 tabIndex='0'>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input
              name='name'
              aria-label='Nombre'
              className='input-register'
              type='text'
              placeholder='Nombre'
              onChange={handleInput}
            />
            <input
              name='email'
              aria-label='Correo'
              className='input-register'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              aria-label='Contraseña'
              className='input-register'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button className='button' type='submit'>Registrarme</button>
          </form>
          <Link className='register__container--link' to='/login'>Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
