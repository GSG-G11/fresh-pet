import React from 'react'
import bone from '../Assets/book-now.png'
import dog from '../Assets/background.jpg';

import './Header.css';

const LandingImage = () => {
  return (
    <div className="background-image">
      <img src={dog} alt="" className="dog-img" />
      <img src={bone} alt="" className="bone-img" />
    </div>
  );
};

export default LandingImage;