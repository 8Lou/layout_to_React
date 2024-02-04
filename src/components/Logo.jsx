import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg'

const Logo = () => {
  return (
    <>
      <Link to="/home">
        <img src={logo} alt="Логотип" className="logo__img" />
      </Link>
    </>
  );
};

export default Logo;