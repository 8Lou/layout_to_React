import React from 'react';
import menuData from '../assets/menuData';
import Logo from './Logo';
import './index.css'

const Header = () => {

  const Menu = () => {
    return (
      <ul className='menu__list'>
        {menuData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className='menu'>
      <Logo />
      <Menu />
    </div>
  );
};

export default Header;