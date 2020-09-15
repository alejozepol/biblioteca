import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions/index';

import Header from '../components/Header';
import '../assets/styles/components/Login.scss';


const Login = (props) => {

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (e) => {

    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginRequest(form);
    props.history.push('/home');
  };

  return (
    <>
      <Header isLogin />
      <section className='login'>
        <section className='login__container'>
          <h2 tabIndex='0'>Incia sesión</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='email'
              aria-label='Correo'
              className='input-login'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              aria-label='Contraseña'
              className='input-login'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button className='button' type='submit'>Iniciar sesión</button>
            <div className='login__container--remember-me'>
              <label>
                <input type='checkbox' id='cajauno' value='checkbox' />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <p className='login__container--register'>
            No tienes ninguna cuenta <Link to='/'>Regístrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
