import React from 'react';
import { motion } from "framer-motion";
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

import './Platforms.scss';

const Platforms = () => {
  return (
    <div id="platforms" className="app__platforms app__container">
      <div className="app__platforms-info">

        <div className="app__platforms-content">
          <p1 className="p-gradient-text">Play our games on your favourite device</p1>
          <h1 className="h2-text">Available Platforms</h1>
        </div>

        <div className="app__platforms-cards">
          <a className="link-disabled">
            <motion.div 
              //whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__card-disabled"
              href=""
            >
              <div className="app__card-logo">
                <img src={images.google} alt="Google Play Store Logo"/>
              </div>
              <p1 className="p2-text">Google Play Store</p1>
            </motion.div>
          </a>

          <a href="https://www.nintendo.com/search/?cat=gme&f=softwarePublisher&softwarePublisher=RuWaMo%20Games" target="_blank" className="link ">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__card"
            >
              <div className="app__card-logo">
                <img src={images.nintendo} alt="Nintendo Switch Logo"/>
              </div>
              <p1 className="p2-text">Nintendo Switch</p1>
            </motion.div> 
          </a>

          <a className="link-disabled">
            <motion.div 
              //whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__card-disabled"
              href=""
            >
              <div className="app__card-logo">
                <img src={images.appstore} alt="Apple Appstore Logo"/>
              </div>
              <p1 className="p2-text">Apple Appstore</p1>
            </motion.div>
          </a>

        </div>
      </div>
    </div>
  )
}

export default Platforms;