import React from 'react';
import { Link } from 'react-router-dom';
import { ImCart } from 'react-icons/im';
import './Header.css';

const Header = ({ numberCartProduct, isLogin, authenticationHandler }) => {
  return (
    <header className='header'>
      <Link to={'/'} className='logo-img'>
        <img src='../img/logo.png' alt='logo' width='120px' />
      </Link>
      <div className='signin-cart-holder'>
        {!isLogin && (
          <button className='signin-btn' onClick={()=>authenticationHandler(true)}>
            Sign in
          </button>
        )}
        {isLogin && (
          <button className='signin-btn' onClick={()=>authenticationHandler(false)}>
            Log out
          </button>
        )}

        <div className='icons'>
          <Link to={'/cart'}>
            <ImCart className='cart-icon' />
            <span className='product-num'>{numberCartProduct}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
