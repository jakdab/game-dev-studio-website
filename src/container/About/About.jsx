import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'

import './About.scss';

const About = () => {
  return (
    <div id="#about" className="app__header app__container">
      <motion.div
        whileInView={{ x: [-100, 0 ], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        
        <motion.div 
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={images.profile} alt="Hero Logo Image"/>
        </motion.div> 
        
        <div className="app__header-content">
          <h1 className="h1-text">About Us</h1>
          <p1 className="p-text">Ruvamo is a newly founded game development studio located in Cracow, Poland. Our aim at Ruvamo is to make the most enjoybale games for the players all around the globe, who wish exape the Earth’s barriers for a period of time. </p1>
          <h1 className="h1-text">Contact</h1>
          <p1 className="p-text">Please feel free to contact us: contact@ruwamogames.com</p1>
        </div>
      </motion.div>
    </div>
  )
}

export default About
