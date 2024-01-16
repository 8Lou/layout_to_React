import React from 'react';
import menuData from '../assets/menuData';
import Logo from './Logo';

const Header = () => {

  const Menu = () => {
    return (
      <ul>
        {menuData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Header;