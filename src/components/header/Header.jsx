import './Header.css';
import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Menu width="40%" className="menu">
        <ul>
          <li className=" menu-item">Watchlist</li>
        </ul>
      </Menu>

      <nav className="navbar ">
        <div className="logo">
          <Link
            to="/"
            className="Home"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            Keep N
          </Link>
        </div>
        <ul className="navlink">
          <li>
            <Link
              to="/Watchlist"
              className="watchpage "
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Watchlist
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
