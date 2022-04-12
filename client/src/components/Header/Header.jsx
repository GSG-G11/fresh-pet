import React from 'react';
import { Link } from 'react-router-dom';
import { ImCart } from 'react-icons/im';
import { FiLogOut } from 'react-icons/fi';
import './Header.css';

const Header = ({ numberCartProduct, isLogin, authenticationHandler }) => {
  return (
    <header className='header'>
      <Link to={'/'} className='logo-img'>
        <img src='../img/logo.png' alt='logo' width='120px' />
      </Link>
      <div className='signin-cart-holder'>
        {!isLogin && (
          <button
            className='signin-btn'
            onClick={() => authenticationHandler(true)}>
            Sign in
          </button>
        )}

        <div className='icons-card'>
          <Link className='icons' to={'/cart'}>
            <ImCart className='cart-icon' />
            <span className='product-num'>{numberCartProduct}</span>
          </Link>
          {isLogin && (
            <div className='icons-logout'>
              <FiLogOut
                className='cart-icon'
                onClick={() => authenticationHandler(false)}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
