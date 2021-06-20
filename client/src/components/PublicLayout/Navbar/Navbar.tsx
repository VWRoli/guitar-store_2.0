import { NavLink, Link } from 'react-router-dom';
import { LINK_ITEMS } from './NavLinksData';
import {
  FaShoppingCart,
  FaBalanceScale,
  FaBars,
  FaChevronCircleUp,
} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav id="nav">
      <div className="nav-center">
        <div className="mobile-header">
          <div className="nav-header">
            <h1>
              <Link to="/">
                Guitar<span>Store</span>
              </Link>
            </h1>
          </div>
          <button
            className="menu-bars"
            onClick={() => setShowMobileNav(!showMobileNav)}>
            <FaBars className="bars-icon" />
          </button>
        </div>
        <ul className={showMobileNav ? 'nav-links active-menu' : 'nav-links'}>
          {LINK_ITEMS.map((link, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={link.route}
                  activeClassName="active-link"
                  exact={true}
                  onClick={() => {
                    setShowMobileNav(false);
                  }}>
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="nav-controls">
          <Link
            to="/compare"
            className="navbar-icons navbar-cart"
            onClick={() => {
              setShowMobileNav(false);
            }}>
            <FaBalanceScale />
            <span className="cart-item-total">0</span>
          </Link>

          <Link
            to="/cart"
            className="navbar-icons navbar-cart"
            onClick={() => {
              setShowMobileNav(false);
            }}>
            <FaShoppingCart />
            <span className="cart-item-total">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
