import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="herotext">
        <h1>We ensure better education for a better world</h1>
        <p>
            We are a non-profit organization that aims to provide quality education to underprivileged children. Our mission is
            to create a better world by empowering the next generation with knowledge and skills.
        </p>
        <button className="btn">Learn More <img src={dark_arrow}/></button>
      </div>
    </div>
  )
}

export default Hero
