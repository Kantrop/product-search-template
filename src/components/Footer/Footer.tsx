import React from 'react';
import { HeaderProps } from '../../types';
import './Footer.css';

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <footer>All rights reserved 2021</footer>
    </div>
  );
};

export default Header;