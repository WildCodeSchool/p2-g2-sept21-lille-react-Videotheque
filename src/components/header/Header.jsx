import './Header.css';
import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="menu">
        <Menu width="40%">
          <ul>
            <li>
              <Link
                to="/"
                className="home"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Home
              </Link>
            </li>
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
        </Menu>
      </div>
      <nav className="navBar ">
        <div className="logo">
          <Link
            to="/"
            className="home"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            Keep N
          </Link>
        </div>
        <ul className="navLink">
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
