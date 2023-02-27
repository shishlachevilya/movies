import React from 'react';
import './Header.scss';

const mockHref = 'https://google.com';

const Header = () => (
  <header className="header">
    <a href={mockHref} className="logo">
      Movies
    </a>

    <nav>
      <a href={mockHref}>dd</a>
      <a href={mockHref}>fdf</a>
    </nav>
  </header>
);

export default Header;
