import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import Address from './Address';
import Hours from './Hours';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <AboutUs />
      <div className="footer">
        <Address />
        <Hours />
      </div>
    </div>
  );
}

export default HomePage;
