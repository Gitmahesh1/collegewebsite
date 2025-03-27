import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
           <img src={about_img} alt="" className='about'/>
           <img src={play_icon} alt="" className='play'/>
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrows,s Leaders Today</h2>
            <p>Our mission is to provide a world-class education that fosters the intellectual, personal
                and professional growth of our students, while promoting a culture of innovation, creativity, and
                entrepreneurship.</p>
                <p>
                    Our vision is to be a leading institution of higher learning, recognized for its academic excellence, innovative
                    research, and commitment to community service.
                </p>
                <p>
                 Our mission is to provide a world-class education that fosters the intellectual, personal
                and professional growth of our students, while promoting a culture of innovation, creativity, and
                entrepreneurship
                </p>
        </div>
      
    </div>
  )
}

export default About
