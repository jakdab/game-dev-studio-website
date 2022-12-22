import React from 'react'
import { images } from '../../constants';

import './Footer.scss';

const Footer = () => {
  return (
    <div id="footer" className="app__footer">
      <div className="app__column">
        <div className="app__logo">
          <img src={images.logo2} alt='logo' />
        </div>
      </div>
      <div className="app__column">
        <p1 className="p2-text">
            We want to provide entertainment for whole 
            family and that is why we aim at budget, high-
            level of polish titles for everybody!
        </p1>
      </div>
      <div className="app__column app__column-meta">
        <p1 className="p2-text">RUWAMO Games © 2022 </p1>
        <div className="app__row">
          <img className="icon" href="https://twitter.com/ruwamogames" src={images.twitter} alt='twitter link'/>
          <img className="icon" href="https://www.youtube.com/@ruwamogames6030" src={images.youtube} alt='youtube link'/>
        </div>
      </div>
    </div>
  )
}

export default Footer;