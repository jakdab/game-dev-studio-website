import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import './About.scss';

const About = () => {
  return (
    <div id="#about" className="app__about app__container">
      <div className="app__about-info">
        
        <div className="app__about-img">
          <img src={images.about} alt="Hero Logo Image"/>
        </div> 
        
        <div className="app__about-content">
          <h1 className="h1-text">About Us</h1>
          <p1 className="p-text">Ruvamo is a newly founded game development studio located in Cracow, Poland. Our aim at Ruvamo is to make the most enjoybale games for the players all around the globe, who wish exape the Earth’s barriers for a period of time. </p1>
          <h1 className="h1-text">Contact</h1>
          <p1 className="p-text">Please feel free to contact us: contact@ruwamogames.com</p1>
        </div>
      </div>
    </div>
  )
}

export default About;
