import React from 'react';
import CurrentDate from '../CurrentDate/CurrentDate';
import Logo from '../SVG/Logo';

import './Header.css';

export default function Header() {
  return (
    <nav className='navbar container'>
      <div className='logo'>
        <Logo />
        <span className='navbar-brand h1'>important list</span>
      </div>
      <CurrentDate />
    </nav>
  );
}
