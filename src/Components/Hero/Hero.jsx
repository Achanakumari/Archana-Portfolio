import React, { useEffect, useState } from 'react';
import './Hero.css';
import profile_img from '../../assets/user.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const [displayText, setDisplayText] = useState("I'm Archana Kumari");

  useEffect(() => {
    const texts = ["I'm Archana Kumari", "Frontend Developer"];
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(texts[index]);
      index = (index + 1) % texts.length; // Loop back to the first text
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div id='home' className='hero'>
      {/* <img src={profile_img} alt="" className='profile-img' /> */}
      <h1>
        <span className="animated-text">{displayText}</span>
      </h1>
      <p>
        I am a frontend developer with 1.5 years of experience in the industry, having had the privilege of contributing to service-based companies like: 
        <a href="https://valethi.com/" target="_blank" rel="noopener noreferrer"> Visit</a>.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
