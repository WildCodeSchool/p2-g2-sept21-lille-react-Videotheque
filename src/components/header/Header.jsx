import './Header.css';
import React from 'react';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">Keep N</div>
      <ul className="navlink">
        <li className="watchpage">Watchlist</li>
      </ul>
    </nav>
  );
};
export default Header;
