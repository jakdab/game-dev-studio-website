import React from 'react'
import { images } from '../../constants';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__column">
        <img src={images.logo} alt='logo' />
      </div>
      <div className="app__column">
        <p1 className="p2-text">RuWaMo Games has one idea - to make great games.
            We want to provide entertainment for whole family and that is why we aim at budget, high-level of polish titles for everybody!</p1>
      </div>
      <div className="app__column">
        <p1 className="p2-text">All rights reserved RUWAMO Games</p1>
        <div className="app__row">
          <img className="icon" src={images.twitter} alt='twitter link'/>
          <img className="icon" src={images.youtube} alt='youtube link'/>
        </div>
      </div>
    </div>
  )
}

export default Footer;