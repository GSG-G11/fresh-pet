import React from 'react';

import './Header.css';

const LandingImage = () => {
  return (
    <div className="background-image">
      <h1 className="slang">
        Everything your pet needs <br /> in one place
      </h1>
      <img src="../img/background.jpg" alt="dog img" className="dog-img" />
      <img
        src="../img/bone.png"
        onClick={() => (window.location.href = '#products')}
        alt="bone"
        className="bone-img"
      />
    </div>
  );
};

export default LandingImage;
