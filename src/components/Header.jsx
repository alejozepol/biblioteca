import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions/index';

// Así importamos una imagen con webpack
import userIcon from '../assets/static/user-icon.png';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logoIcon from '../assets/static/reading-book.png';

const profile = 'Perfil';
// const account = 'Cuenta';
const logIn = 'Iniciar sesión';
const logOut = 'Cerrar sesión';
const altUser = 'User';
const altLogo = 'Platzi video';

const Header = (props) => {

  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogOut = () => {
    props.logoutRequest({});
  };

  return (

    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logoIcon} alt={altLogo} />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ? (
            <img src={gravatar(user.email)} alt={altUser} />
          ) : (
            <img src={userIcon} alt={altUser} />
          )}
          <p>{profile}</p>
        </div>
        <ul>
          {hasUser ? (
            <>
              <li>
                <Link to='/'>{user.name}</Link>
              </li>
              <li>
                <Link to='/login' onClick={handleLogOut}>{logOut}</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to='/login'>{logIn}</Link>
            </li>
          )}
        </ul>
      </div>
    </header>

  );
};

Header.propTypes = {
  user: propTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

