import React from 'react';
import '../assets/style/components/Header.scss';
import iconPerfil from '../assets/static/perfil1.png';

const Header = () => (

  <header className='header'>

    <img className='header__img' src='https://i.imgur.com/92vW7bO.png' alt='' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={iconPerfil} alt='' />
        <p>Perfil</p>
      </div>

      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar sesion</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
