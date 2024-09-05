import React from 'react'
import './Hero.css'
import profile_img from '../../assets/user.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Archana Kumari, </span>frontend developer based in india</h1>
      <p>
        I am a frontend developer with 1.5 years of experience in the industry, having had the privilege of contributing to product-based companies like: 
        <a href="https://valethi.com/" target="_blank" rel="noopener noreferrer"> Visit</a>.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
