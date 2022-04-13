import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return(
      <div className='footer'>
        <Link to={'/'} className='logo-img'>
          <img src='../img/logo.png' alt='logo' width='120px' />
        </Link>
        <img className='footer-img' src='../img/footer.webp' alt='footer'/>
      </div>
  )
}
export default Footer;
