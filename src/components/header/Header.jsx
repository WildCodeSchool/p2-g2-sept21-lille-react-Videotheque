import './Header.css';
import React from 'react';
import { bubble as Menu } from 'react-burger-menu';

const Header = () => {
  return (
    <>
      <Menu width="40%" className="menu">
        <ul>
          <li className=" menu-item">Watchlist</li>
        </ul>
      </Menu>

      <nav className="navbar ">
        <div className="logo">Keep N</div>
        <ul className="navlink">
          <li className="watchpage ">Watchlist</li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
