import React from 'react';
import { HeaderProps } from '../../types';
import './Header.css';

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
      </head>
      <header>
        <a>Home</a>
        <a>About Us</a>
        <a>Our Lands</a>
        <a>Our Suppliers</a>
        <a>Products</a>
        <a>Contact Us</a>
      </header>
      {/* <footer>Все права защищены 2021</footer> */}
    </div>
  );
};

export default Header;
