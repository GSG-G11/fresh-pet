import React from 'react';

import './Header.css';

const LandingImage = () => {
  return (
    <div className="background-image">
      <img src="../img/background.jpg" alt="dog img" className="dog-img" />
      <img src="../img/bone.png" alt="bone" className="bone-img" />
    </div>
  );
};

export default LandingImage;
