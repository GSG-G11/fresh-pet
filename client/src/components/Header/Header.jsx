import React from 'react';
import logo from '../Assets/logo.png';
import { ImCart } from 'react-icons/im';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" className="logo-img" />
      <div className="signin-cart-holder">
        <button className="signin-btn"> sign in</button>
        <div className="icons">
          <ImCart className='cart-icon'/>
          <span className='product-num'>5</span>
        </div>
          </div>
    </header>
  );
};

export default Header;