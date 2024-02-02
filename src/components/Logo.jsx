import React from 'react';
import logo from '../assets/img/logo.svg'

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="Логотип" className="logo__img" />
    </div>
  );
};

export default Logo;