import React from 'react';
import { motion } from "framer-motion";
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

import './Platforms.scss';

const Platforms = () => {
  return (
    <div className="app__platforms app__container">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__platforms-info"
      >
        <div className="app__platforms-content">
          <p1 className="p-gradient-text">Play our games on your favourite device</p1>
          <h1 className="h2-text">Available Platforms</h1>
        </div>
      </motion.div>

      
    </div>
  )
}

export default Platforms;