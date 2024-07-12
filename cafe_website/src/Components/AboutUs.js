import React from 'react';
import './AboutUs.css';
import cafeImage from '../assets/cafe.png'; 
import headingImage from '../assets/heading.png';

function AboutUs() {
  return (
    <section className="about-us">
            <img src={headingImage} alt="Sip & Play Heading" className="heading-image" />
      <div className="about-us-content">
        <div className="about-us-text">
          <h2><u>ABOUT US</u></h2>
          <p>
            Welcome to Sip & Play, where board games, boba, and delicious food collide in a symphony of fun! Our founder, Jonathan Li, couldn't choose between his love for board games and his craving for boba, so he decided to mix them up into Park Slope’s first board game cafe.
          </p>
          <p>
            Imagine this: a cozy spot where you and your friends can dive into our library of over 300 board games, from timeless classics to the latest brain-busters. Whether you're a strategic mastermind or just in it for the laughs, we've got a game for you!
          </p>
          <p>
            But wait, there's more! Alongside your epic game sessions, you can savor our freshly brewed coffee, rich espresso, tantalizing boba, and mouth-watering sandwiches and snacks. So, grab your friends, roll the dice, and let the good times roll at Sip & Play!
          </p>
        </div>
        <img src={cafeImage} alt="Sip & Play Cafe" className="about-us-image" />
      </div>
    </section>
  );
}

export default AboutUs;
