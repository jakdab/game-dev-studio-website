import React, { useState } from 'react';

//import Buttons from './components/';
import { images } from '../../constants/';
import './Navbar.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
//import { About } from '../../container';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt='logo' />
      </div>

      <ul className="app__navbar-links">
        {[ 'games', 'about', 'platforms'].map((item) => (
          <li className="app__flex p-text" key={'link-${item}'}>
            <a href={`#${item}`} /* onClick={() => setToggle(false)} */ >{item}</a>
          </li>
        ))}
      </ul>

      

      {/* <ul className="app__navbar-cta">
        {['Contact'].map((item) => (
          <li className="app__flex p-text" key={'link-${item}'}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul> */}

      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)}/>

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut'}}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['About', 'Games', 'Platforms'].map((item) => (
                <li key={{item}}>
                  <div />
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
                ))}
              </ul>
            </motion.div>
          )}
      </div> 
    </nav>
  )
}

export default Navbar;