import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import './About.scss';

const About = () => {
  return (
    <div id="about" className="app__about app__container">
      <div className="app__about-info">
        
        <div className="app__about-img">
          <img src={images.about} alt="Hero Logo Image"/>
          {/* <div className="app__img-shadow"/> */}
        </div> 
        
        <div className="app__about-content">
          <h1 className="h1-text">About Us</h1>
          <p1 className="p-text margin-8">
              RuWaMo Games has one idea - to make great games. 
              As a small company made by industry veterans we produce casual games, puzzle games and we port games for consoles and mobiles. 
              We want to provide entertainment for whole family and that is why we aim at budget, high-level of polish titles for everybody! 
            </p1>
          <h1 className="h1-text margin-16">Contact</h1>
          <p1 className="p-text margin-8">Please feel free to contact us: 
            
          </p1> 
          <a className="p-text p-link" href="mailto:contact@ruwamogames.com">contact@ruwamogames.com</a>
        </div>
      </div>
    </div>
  )
}

export default About;
