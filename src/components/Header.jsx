import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './index.css'

const Header = () => {

  const Menu = () => {
    return (
      < nav >
        <ul className='menu__list'>
          <li>
            <Link to="/">NEW CARS</Link>
          </li>
          <li>
            <Link to="/about">PRE - OWNED CARS</Link>
          </li>
          <li>
            <Link to="/about">FINANSE</Link>
          </li>
          <li>
            <Link to="/about">LEASE VS BUY</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      </nav >
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