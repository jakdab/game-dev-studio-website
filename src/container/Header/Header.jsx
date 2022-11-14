import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
//import { Buttons } from './components/';

import './Header.scss';

const Header = () => {
  return (
    <div className="app__header app__container">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-content">
          <h1 className="h1-text">discover new worlds</h1>
          <p1 className="p-text">Ruwamo is a stand-alone game development studio which offers games on consoles and mobile devices</p1>
            
          {/* <Buttons>Success</Buttons> */}

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

export default Header;
// export default AppWrap(Header, 'home');