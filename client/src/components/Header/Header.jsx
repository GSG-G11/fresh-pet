import React from 'react';
import {Link} from 'react-router-dom';
import {ImCart} from 'react-icons/im';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to={'/'} className='logo-img'>
        <img src="../img/logo.png" alt="logo" width='120px'/>
      </Link>
      <div className="signin-cart-holder">
        <button className="signin-btn">Sign in</button>
        <div className="icons">
          <ImCart className="cart-icon" />
          <span className="product-num">5</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
