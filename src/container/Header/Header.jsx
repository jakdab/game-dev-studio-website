import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'

import './Header.scss';

const Header = () => {
  return (
    <div id="#home" className="app__header app__container">
      <motion.div
        whileInView={{ x: [-100, 0 ], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-content">
          <h1 className="h1-text">discover new worlds</h1>
          <p1 className="p-text">Ruwamo is a stand-alone game development studio which offers games on consoles and mobile devices</p1>
            
          {/* <div className="tag-cmp app__flex">
            CTA
          </div> */}
        </div>
      </motion.div>

      <motion.div 
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="Hero Logo Image"/>
      </motion.div>
    </div>
  )
}

export default Header