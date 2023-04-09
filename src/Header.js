import React from 'react';
import Banner from './Banner.jpeg';

function Header() {
  return (
    <header>
      <div className="banner">
        <img className="banner-image" src={Banner} alt="banner" />
        <h1 className="banner-text">Tua Tähkäpää</h1>
        <h2 className='banner-subtext'>Tekstien käsittelyä ammattitaidolla</h2>
      </div>
    </header>
  );
}

export default Header;