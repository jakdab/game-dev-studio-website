import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { Buttons } from '../../components/index';

import './Header.scss';

const Header = () => {
  return (
    <div id="header" className="app__header">
      <div className="app__header-info">
        <div className="app__header-content">
          <h1 className="h1-text">discover new worlds</h1>
          <p1 className="p-text margin-16">Ruwamo is a stand-alone game development studio which offers games on consoles and mobile devices</p1>
          <div className="app__btn-primary margin-24">
            <a className="app__btn-primary-link" href="#games">Explore</a>
          </div>
        </div>

        <div className="app__header-img">
          <img src={images.profile} alt="Hero Logo Image"/>
          {/* <div className="app__img-shadow"/> */}
        </div>
      </div>

    </div>
  )
}

export default Header;
// export default AppWrap(Header, 'home');


